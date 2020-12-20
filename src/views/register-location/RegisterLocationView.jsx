import React, { useState } from 'react';
import {
  Form,
  Input,
  Card,
  Select,
  Upload,
  Modal,
  Button,
  message,
} from 'antd';
import {
  HomeOutlined,
  PlusOutlined,
  PictureOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { GoogleProvider } from 'leaflet-geosearch';

import InputMask from 'react-input-mask';
import axios from 'axios';

const { Option } = Select;

const RegisterLocationView = () => {
  const [form] = Form.useForm();

  // upload
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  // map
  const [foundAddress, setFoundAddress] = useState();
  const [mapRef, setMapRef] = useState();

  const handleCEPSearch = (value) => {
    if (!value.includes('_')) {
      axios
        .get(`http://viacep.com.br/ws/${value.replace('-', '')}/json/`)
        .then((res) => {
          const { data } = res;
          form.setFieldsValue({
            address: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
          });
        })
        .catch(() => {
          // error
        });
    }
  };

  const searchForAddress = async () => {
    const fieldsValue = form.getFieldsValue();
    if (fieldsValue.address && fieldsValue.number && fieldsValue.neighborhood) {
      const stringSearch = `${fieldsValue.address}, ${fieldsValue.number} - ${fieldsValue.neighborhood}`;
      const gogoleProvider = new GoogleProvider({
        params: {
          key: process.env.REACT_APP_GOOGLE_KEY,
          language: 'pt-BR',
          region: 'br',
        },
      });
      const result = await gogoleProvider.search({ query: stringSearch });
      console.log(result);
      setFoundAddress({
        position: [result[0].y, result[0].x],
        popup: result[0].label,
      });
      console.log(mapRef);
      mapRef.leafletElement.setView([result[0].y, result[0].x], 15);
    } else {
      message.warning('Preencha todos os campos de endereço antes de buscar.');
    }
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCancel = () => setPreviewVisible(false);

  const handleChange = ({ fileList: a }) => setFileList(a);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className="form-register-location">
      <Form
        form={form}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '20px',
        }}
        layout="vertical"
        initialValues={{
          city: 'São Carlos',
        }}
      >
        <Button
          icon={<SendOutlined />}
          style={{
            gridColumn: '3',
            marginBottom: '30px',
            justifySelf: 'end',
            width: '30%',
          }}
          type="primary"
          size="large"
        >
          Enviar
        </Button>
        <Card
          title={
            <>
              <HomeOutlined />
              <span style={{ marginLeft: '5px' }}>Localização do imóvel</span>
            </>
          }
        >
          <div className="add-location-address-grid">
            <Form.Item
              rules={[{ required: true, message: 'Insira o CEP.' }]}
              name="cep"
              label="CEP"
            >
              <InputMask
                onChange={(e) => handleCEPSearch(e.target.value)}
                mask="99999-999"
              >
                {() => <Input placeholder="CEP" size="large" />}
              </InputMask>
            </Form.Item>
            <Form.Item
              style={{ gridColumn: '1 / span 2' }}
              rules={[{ required: true, message: 'Insira seu nome.' }]}
              name="address"
              label="Logadouro"
            >
              <Input size="large" placeholder="Logadouro" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Insira seu nome.' }]}
              name="neighborhood"
              label="Bairro"
            >
              <Select
                filterOption={(input, option) =>
                  option.children
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .indexOf(input.toLowerCase()) >= 0
                }
                showSearch
                size="large"
                placeholder="Bairro"
              >
                <Option value="Água Vermelha">Água Vermelha</Option>
                <Option value="Antenos Garcia">Antenos Garcia</Option>
                <Option value="Arcoville">Arcoville</Option>
                <Option value="Arnold Schimidt">Arnold Schimidt</Option>
                <Option value="Broa">Broa</Option>
                <Option value="Cidade Jardim">Cidade Jardim</Option>
                <Option value="Centro">Centro</Option>
                <Option value="Cruzero do Sul">Cruzero do Sul</Option>
                <Option value="Damha Golf">Damha Golf</Option>
                <Option value="Jardim Acapulco">Jardim Acapulco</Option>
                <Option value="Jardim Alvorada">Jardim Alvorada</Option>
                <Option value="Jardim Brasil">Jardim Brasil</Option>
                <Option value="Jardim Centenário">Jardim Centenário</Option>
                <Option value="Monjolinho">Monjolinho</Option>
              </Select>
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Insira seu nome.' }]}
              name="city"
              label="Cidade"
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Insira seu nome.' }]}
              name="number"
              label="Número"
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item name="extra" label="Complemento">
              <Input size="large" />
            </Form.Item>
            <Button
              style={{ marginBottom: '20px', gridColumn: '1 / span 2' }}
              onClick={searchForAddress}
              icon={<EnvironmentOutlined />}
              size="large"
            >
              Buscar endereço
            </Button>
          </div>
          <Map
            ref={(ref) => {
              setMapRef(ref);
            }}
            className="add-location-map"
            center={[-22.0154, -47.8911]}
            zoom={14}
            maxZoom={16}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {foundAddress ? (
              <Marker position={foundAddress.position}>
                <Popup>{foundAddress.popup}</Popup>
              </Marker>
            ) : null}
          </Map>
        </Card>
        <Card
          title={
            <>
              <PictureOutlined />
              <span style={{ marginLeft: '5px' }}>Imagens do imóvel</span>
            </>
          }
        >
          <Form.Item>
            <Upload
              multiple
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Form.Item>
        </Card>
        <Card
          title={
            <>
              <EnvironmentOutlined />
              <span style={{ marginLeft: '5px' }}>Detalhes do imóvel</span>
            </>
          }
        >
          <Form.Item label="Tipo de imóvel">
            <Select mode="tags" size="large" placeholder="Tipo de imóvel">
              <Option value="jack">Apartamento</Option>
              <Option value="lucy">Casa</Option>
              <Option value="disabled">Terreno</Option>
              <Option value="Yiminghe">Galpão</Option>
            </Select>
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Insira seu nome.' }]}
            name="price"
            label="Preço"
          >
            <Input prefix="R$" size="large" />
          </Form.Item>
        </Card>
      </Form>
    </div>
  );
};

export default RegisterLocationView;
