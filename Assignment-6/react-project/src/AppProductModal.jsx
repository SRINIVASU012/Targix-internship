import { Modal, Form, Input, InputNumber } from "antd";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

export const AddProductModal = ({ open, setOpen }) => {

  const [form] = Form.useForm();

  const { dispatch } = useContext(ProductContext);

  const handleOk = async () => {

    try {

      const values = await form.validateFields();

      const newProduct = {
        itemName: values.itemName,
        price: values.price,
        type: values.type,
      };

      const response = await fetch(
        "http://localhost:8080/api/items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      const savedProduct = await response.json();

      dispatch({
        type: "ADD_PRODUCT",
        payload: savedProduct,
      });

      form.resetFields();

      setOpen(false);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <Modal
      title="Add Fresh Item"
      open={open}
      onOk={handleOk}
      onCancel={() => setOpen(false)}
    >

      <Form form={form} layout="vertical">

        <Form.Item
          name="itemName"
          label="Item Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price (₹)"
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="type"
          label="Type"
        >
          <Input />
        </Form.Item>

      </Form>

    </Modal>
  );
};