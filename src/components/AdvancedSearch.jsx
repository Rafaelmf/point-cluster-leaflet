import React from 'react';
import { Select, Form, Input } from 'antd';

const { Option } = Select;

const AdvancedSearch = () => {
  return (
    <div className="advanced-search-bar">
      <Form.Item label="Preço">
        <Input.Group style={{ display: 'flex' }}>
          <Input
            size="large"
            style={{ textAlign: 'center' }}
            placeholder="Mínimo"
          />
          <Input
            size="large"
            style={{
              width: 30,
              borderLeft: 0,
              borderRight: 0,
              pointerEvents: 'none',
            }}
            placeholder="~"
            disabled
          />
          <Input
            size="large"
            className="site-input-right"
            style={{
              textAlign: 'center',
            }}
            placeholder="Máximo"
          />
        </Input.Group>
      </Form.Item>
      <Form.Item label="Quartos">
        <Select size="large" placeholder="Quartos">
          <Option value="jack">1</Option>
          <Option value="lucy">2</Option>
          <Option value="disabled">3</Option>
          <Option value="Yiminghe">4</Option>
          <Option value="Yiminghe">5+</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Banheiros">
        <Select size="large" placeholder="Banheiros">
          <Option value="jack">1</Option>
          <Option value="lucy">2</Option>
          <Option value="disabled">3</Option>
          <Option value="Yiminghe">4</Option>
          <Option value="Yiminghe">5+</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Garagem">
        <Select size="large" placeholder="Garagem">
          <Option value="jack">1</Option>
          <Option value="lucy">2</Option>
          <Option value="disabled">3</Option>
          <Option value="Yiminghe">4</Option>
          <Option value="Yiminghe">5+</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default AdvancedSearch;
