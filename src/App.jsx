import "./App.css";
import "antd/dist/antd.css";
import { Input, Table } from "antd";
const { Search } = Input;

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/university/action";

function App() {

  const dispatch = useDispatch();

  const unis = useSelector((state) => state.listOfUnis);

  const onSearch = (value) => {
    dispatch(getAllUsers(value));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
  ];

  return (
    <div style={{ width: "87%", margin: "auto", marginTop: "30px" }}>
      <Search
        placeholder="search university"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div style={{ marginTop: "30px" }}>
        {unis.error && (<h2>Oops! Unexpected error!</h2>)}
        {unis.status == 'pending' && (<h2>Loading</h2>)}
        {unis.data && (
          <Table dataSource={unis.data} columns={columns} />
        )}
      </div>
    </div>
  );
}

export default App;
