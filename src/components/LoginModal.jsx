import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const LoginModal = (props) => {
  const { visible, setVisibility } = props;

  const onFinishLogin = () => {
    localStorage.setItem('token', 'ashuahsu');
    setVisibility(false);
  };

  return (
    <Modal
      style={{ top: '200px' }}
      visible={visible}
      title="Acesso ao sistema"
      onCancel={() => setVisibility(false)}
      footer={null}
    >
      <Form
        onFinish={onFinishLogin}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            { required: true, message: 'Insira um e-mail' },
            { type: 'email', message: 'Este e-mail não é válido.' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Senha"
          name="passwrd"
          rules={[{ required: true, message: 'Insira uma senha!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
