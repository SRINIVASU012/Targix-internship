import { Modal, Form, Input, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

export const AddProductModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleOk = () => {
    form.validateFields().then((values) => {
      setOpen(false);
      navigate("/confirm", { state: values });
    });
  };

  return (
    <Modal
      title="Add Fresh Item "
      open={open}
      onOk={handleOk}
      onCancel={() => setOpen(false)}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="title"
          label="Item Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Price (₹)">
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item name="category" label="Type">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}
