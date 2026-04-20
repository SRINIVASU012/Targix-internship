import { DatePicker, Input, Select, Button, Table } from "antd";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import {AddProductModal} from "./AppProductModal";
import { Container, Header } from "./StyledComponents";

const { RangePicker } = DatePicker;

export const Page1 = () => {
  const { products } = useContext(ProductContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState(false);

  const [dates, setDates] = useState([
    dayjs().subtract(7, "day"),
    dayjs(),
  ]);

  const filtered = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (!category || p.category === category)
    );
  });

  const columns = [
    { title: "Item Name", dataIndex: "title" },
    { title: "Price (₹)", dataIndex: "price" },
    { title: "Type", dataIndex: "category" },
  ];

  return (
    <Container>
      <Header>
         Nature's Spread - Fresh Items
      </Header>

      <RangePicker
        value={dates}
        onChange={(val) => setDates(val)}
        style={{ marginBottom: 10 }}
      />

      <Input
        placeholder="Search fresh items "
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 200, marginRight: 10 }}
      />

      <Select
        placeholder="Type"
        style={{ width: 180, marginRight: 10 }}
        onChange={(val) => setCategory(val)}
        allowClear
      >
        <Select.Option value="leafy">Leafy Greens</Select.Option>
        <Select.Option value="roots">Roots</Select.Option>
        <Select.Option value="fruits">Fruits</Select.Option>
      </Select>

      <Button type="primary" onClick={() => setOpen(true)}>
        Add Fresh Item 
      </Button>

      <Table
        columns={columns}
        dataSource={filtered}
        rowKey="id"
        pagination={ { pageSize: 5 } }
        style={{ marginTop: 20, background: "white", borderRadius: 10 }}
      />

      <AddProductModal open={open} setOpen={setOpen} />
    </Container>
  );
}

