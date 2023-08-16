import { Space, Typography, Select, InputNumber, Button } from 'antd';
import { useEffect } from 'react';
import { BsArrowDownUp } from 'react-icons/bs';
import { getSymbols } from '../../services';
import useFetch from '../../hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { fetchCourse, fetchSymbols } from '../../slices/coursesSlice/coursesSlice';
const { Title } = Typography;

function App() {
  const dispatch = useAppDispatch();
  const { symbols } = useAppSelector((state) => state.courses);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log(value);
  };

  useEffect(() => {
    dispatch(fetchSymbols());
  }, []);

  console.log(symbols);

  return (
    <div className="container">
      <div className="content">
        <InputNumber placeholder="Enter Amount" className="content__input" size="large" min={1} max={100000} />
        <Space direction="vertical" size="small">
          <Title level={3}>From</Title>
          <Select
            size="large"
            className="content__select"
            showSearch
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={[...symbols]}
          />
        </Space>
        <Button className="content__button" icon={<BsArrowDownUp />} shape="circle" />
        <Space direction="vertical">
          <Title level={3}>Into</Title>
          <Select
            size="large"
            className="content__select"
            showSearch
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
            options={[...symbols]}
          />
        </Space>
        <InputNumber className="content__input" size="large" readOnly />
        <Space direction="vertical" size="small">
          <Title level={3}>Rate = ???</Title>
        </Space>
      </div>
    </div>
  );
}

export default App;
