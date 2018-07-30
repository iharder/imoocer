<template>
  <div>
    <a-card title="基础表格">
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text" href="#">{{text}}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="action" slot-scope="text, record">
          <a href="#">Action 一 {{record.name}}</a>
          <a-divider type="vertical" />
          <a href="#">Delete</a>
          <a-divider type="vertical" />
          <a href="#" class="ant-dropdown-link">
            More actions <a-icon type="down" />
          </a>
        </span>
      </a-table>
    </a-card>
    <a-card title="动态渲染表格">
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text" href="#">{{text}}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="action" slot-scope="text, record">
          <a href="#">Action 一 {{record.name}}</a>
          <a-divider type="vertical" />
          <a href="#">Delete</a>
          <a-divider type="vertical" />
          <a href="#" class="ant-dropdown-link">
            More actions <a-icon type="down" />
          </a>
        </span>
      </a-table>
    </a-card>
  </div>
</template>
<script>
import axios from "axios";
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

export default {
  name: "Basic",
  data() {
    return {
      data,
      columns
    };
  },
  mounted() {
    
  }
};
</script>
<style lang="stylus" scoped>
</style>
