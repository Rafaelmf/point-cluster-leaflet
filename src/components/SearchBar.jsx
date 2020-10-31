import React from 'react';
import { Button, Input, Select, Form, Slider } from 'antd';

const { Option } = Select;

const SearchBar = () => {
  const formatter = (value) => {
    return `R$ ${value}`;
  };

  return (
    <Form layout="inline">
      <Form.Item label="Busca">
        <Input placeholder="Busque pela referência" />
      </Form.Item>
      <Form.Item label="Tipo de imóvel">
        <Select defaultValue="lucy" style={{ width: 120 }}>
          <Option value="jack">Apartamento</Option>
          <Option value="lucy">Casa</Option>
          <Option value="disabled">Terreno</Option>
          <Option value="Yiminghe">Galpão</Option>
        </Select>
      </Form.Item>
      <Form.Item style={{ width: '400px' }} label="Preço">
        <Slider
          tipFormatter={formatter}
          tooltipVisible
          range
          defaultValue={[0, 9999]}
          min={0}
          max={9999}
        />
      </Form.Item>
      <Button type="primary">Buscar</Button>
    </Form>
  );
};

export default SearchBar;
