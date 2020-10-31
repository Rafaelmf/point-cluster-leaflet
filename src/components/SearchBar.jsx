import React from 'react';
import { Button, Input, Select, Form, Collapse } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';
import AdvancedSearch from './AdvancedSearch';

const { Option } = Select;
const { Panel } = Collapse;

const SearchBar = () => {
  return (
    <Form layout="vertical">
      <Button
        className="search-button"
        htmlType="submit"
        size="large"
        type="primary"
        icon={<SearchOutlined />}
      >
        Buscar
      </Button>
      <div className="search-bar-form">
        <Form.Item label="Código ou Endereço">
          <Input size="large" placeholder="Busque pela referência" />
        </Form.Item>
        <Form.Item label="Bairro">
          <Select mode="tags" size="large" placeholder="Bairro">
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
        <Form.Item label="Tipo de imóvel">
          <Select mode="tags" size="large" placeholder="Tipo de imóvel">
            <Option value="jack">Apartamento</Option>
            <Option value="lucy">Casa</Option>
            <Option value="disabled">Terreno</Option>
            <Option value="Yiminghe">Galpão</Option>
          </Select>
        </Form.Item>
      </div>
      <Collapse
        expandIcon={({ isActive }) => (
          <SettingOutlined
            style={{ fontSize: '25px' }}
            rotate={isActive ? 90 : 0}
          />
        )}
        ghost
        accordion
      >
        <Panel
          header={
            <h2
              style={{
                marginLeft: '10px',
                marginBottom: 0,
                justifyContent: 'center',
              }}
            >
              Busca avançada{' '}
            </h2>
          }
          key="1"
        >
          <AdvancedSearch />
        </Panel>
      </Collapse>
    </Form>
  );
};

export default SearchBar;
