import { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Input, Table } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";
const { Search } = Input;

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/university/action";

function App() {
  const [dataSource, setDataSource] = useState();

  const dispatch = useDispatch();

  const unis = useSelector((state) => state.listOfUnis);

  const onSearch = (value) => {
    dispatch(getAllUsers(value));
  };

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

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
