import React from 'react';
import { Button, Form, Input, Card } from 'antd';
import { SendOutlined, MailOutlined } from '@ant-design/icons';

import InputMask from 'react-input-mask';

const { TextArea } = Input;

const ContactView = () => {
  return (
    <div className="contact-form">
      <Card
        title={
          <>
            <MailOutlined />
            <span style={{ marginLeft: '5px' }}>Formulário de contato</span>
          </>
        }
      >
        <Form
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            columnGap: '20px',
          }}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: 'Insira seu nome.' }]}
          >
            <Input placeholder="Nome" size="large" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Insira um email para contato.' },
              { type: 'email', message: 'Email inválido' },
            ]}
          >
            <Input placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Celular"
            rules={[
              { required: true, message: 'Insira um telefone para contato.' },
            ]}
          >
            <InputMask mask="(99) 99999-9999">
              {() => <Input placeholder="Celular" size="large" />}
            </InputMask>
          </Form.Item>
          <Form.Item
            style={{ gridColumn: '1 / span 3' }}
            name="message"
            label="Mensagem"
            rules={[{ required: true, message: 'Insira sua mensagem.' }]}
          >
            <TextArea placeholder="Insira sua mensagem" rows={4} size="large" />
          </Form.Item>
          <Button
            icon={<SendOutlined />}
            style={{ gridColumn: '3', width: '50%', justifySelf: 'center' }}
            type="primary"
            size="large"
            htmlType="submit"
          >
            Enviar mensagem
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ContactView;
