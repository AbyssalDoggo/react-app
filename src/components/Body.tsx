import React, { useEffect, useState } from "react";
import {
  Typography,
  Row,
  Col,
  Card,
  Input,
  Select,
  Divider,
  Checkbox,
  Button,
  Flex,
  Switch,
} from "antd";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Column from "antd/es/table/Column";
import CategorySlider from "./CategorySlider";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

interface CategoryData {
  categoryName: string;
  pricePerSquare: number;
  coefficient: number;
  area: number;
}

function Body() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  // const [category, setCategory] = useState<CategoryData[]>([]);
  // useEffect(() => {
  //   axios.get<CategoryData[]>("").then((res) => setCategory(res.data));
  // }, []);

  return (
    <div style={{ padding: "20px", marginBottom: "200px" }}>
      <div style={{ maxWidth: "80%", margin: "0 auto", display: "grid" }}>
        <Row justify="center">
          <Col span={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "100%",
                marginBottom: "50px",
              }}
            >
              <Title level={2}>Customer</Title>
            </div>
          </Col>
        </Row>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={8} style={{ flex: 1 }}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                bordered={true}
                style={{ padding: "20px", minHeight: "100%" }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div>
                    <Flex gap="small" vertical>
                      <span>Dự Án: </span>
                      <input
                        {...register("name", { required: true })}
                        id="name"
                        placeholder="Nhập tên dự án"
                        style={{
                          width: "auto", // Adjust the width according to your needs
                          borderRadius: "10px", // Adjust the border radius for rounded corners
                          padding: "10px",
                          outline: "none",
                        }}
                        className="form-control"
                      />
                      {errors.name?.type === "required" && (
                        <p style={{ marginTop: "-2px" }}>Please enter</p>
                      )}
                    </Flex>
                  </div>
                  <div>
                    <Flex gap="small" vertical>
                      <span>Địa chỉ: </span>
                      <input
                        {...register("address", { required: true })}
                        id="address"
                        placeholder="Nhập tên dự án"
                        style={{
                          width: "auto", // Adjust the width according to your needs
                          borderRadius: "10px", // Adjust the border radius for rounded corners
                          padding: "10px",
                        }}
                        className="form-control"
                      />
                      {errors.address?.type === "required" && (
                        <p style={{ marginTop: "-2px" }}>Please enter</p>
                      )}
                    </Flex>
                  </div>
                  <div>
                    <span style={{ display: "block" }}>Loại Gói:</span>
                    <Controller
                      control={control}
                      name="packageType"
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder="Chọn loại gói"
                          style={{
                            width: "100%",
                            marginTop: 10,
                          }}
                        >
                          <Option value="1">Tối ưu tiền</Option>
                          <Option value="2">Chất lượng trung bình</Option>
                          <Option value="3">Tối ưu chất lượng</Option>
                          <Option value="4">Tốt nhất</Option>
                        </Select>
                      )}
                    />{" "}
                    {errors.packageType?.type === "required" && (
                      <p style={{ marginTop: "-2px" }}>Please enter</p>
                    )}
                  </div>

                  <div></div>
                  <div>
                    <Flex gap="small" vertical>
                      <span>Diện tích đất: </span>
                      <input
                        {...register("area", { required: true })}
                        id="area"
                        placeholder="Nhập tên dự án"
                        style={{
                          width: "auto", // Adjust the width according to your needs
                          borderRadius: "10px", // Adjust the border radius for rounded corners
                          padding: "10px",
                          outline: "none",
                        }}
                        className="form-control"
                      />
                      {errors.name?.type === "required" && (
                        <p style={{ marginTop: "-2px" }}>Please enter</p>
                      )}
                    </Flex>
                  </div>
                  <div>
                    <span>Diện tích xây dựng: </span>
                    <Input.TextArea
                      autoSize={{ minRows: 1, maxRows: 5 }}
                      placeholder="Nhập diện tích xây dựng(m2)"
                      style={{ marginBottom: 25, marginTop: 10 }}
                    />
                  </div>

                  <div>
                    <span>Mô tả thêm(nếu có): </span>
                    <Input.TextArea
                      autoSize={{ minRows: 4, maxRows: 10 }}
                      placeholder="Mô tả"
                    />
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Card
                bordered={true}
                style={{ padding: "20px", minHeight: "100%" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span style={{ fontWeight: "bold", paddingBottom: 10 }}>
                    Danh sách các hạng mục{" "}
                  </span>
                  <CategorySlider
                    categoryName="das"
                    pricePerSquare={3}
                    coefficient={3}
                    area={3}
                  />
                  <CategorySlider
                    categoryName="dasdsadassd"
                    pricePerSquare={2}
                    coefficient={2}
                    area={2}
                  />
                  ;<button style={{ height: "60px" }}>Xác nhận</button>
                </div>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
}

export default Body;
