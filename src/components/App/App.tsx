import { Space, Typography, Select, InputNumber, Button } from 'antd';
import { BsArrowDownUp } from 'react-icons/bs';
const { Title } = Typography;

function App() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <div className="container">
      <div className="content">
        <InputNumber className="content__input" size="large" min={1} max={100000} />
        <Space direction="vertical" size="small">
          <Title level={3}>From</Title>
          <Select
            size="large"
            className="content__select"
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'tom',
                label: 'Tom',
              },
            ]}
          />
        </Space>
        <Button className="content__button" icon={<BsArrowDownUp />} shape="circle" />
        <Space direction="vertical">
          <Title level={3}>Into</Title>
          <Select
            size="large"
            className="content__select"
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={[
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'tom',
                label: 'Tom',
              },
            ]}
          />
        </Space>

        <InputNumber className="content__input" size="large" readOnly />
        <Space direction="vertical" size="small">
          <Title level={2}>1 ??? = 0.01 ???</Title>
          <Title level={3}>Rate = ???</Title>
        </Space>
      </div>
    </div>
  );
}

export default App;
