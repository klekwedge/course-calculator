import { InputNumber } from 'antd';
import CustomSelect from '../CustomSelect/CustomSelect';

function App() {
  return (
    <div className="container">
      <div className="content">
        <InputNumber size="large" min={1} max={100000} />
        <CustomSelect />
        <InputNumber size="large" readOnly />
      </div>
    </div>
  );
}

export default App;
