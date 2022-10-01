import { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Input, Table } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";
const { Search } = Input;

function App() {
  const [dataSource, setDataSource]=useState()

  const onSearch = (value) => {
    axios.get(`http://universities.hipolabs.com/search?name=${value}`)
      .then(res=> setDataSource(res.data))
  }

  console.log(dataSource)

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
      <div style={{marginTop: '30px'}}>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    </div>
  );
}

export default App;
