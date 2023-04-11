import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getById, update } from "../../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import { updateForm, updateSchema } from "../../../../models";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,

    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Sản phẩm chung", "1", <PieChartOutlined />),
  getItem("Laptop", "2", <DesktopOutlined />),
  getItem("Âm thanh", "3", <ContainerOutlined />),
];

const Updateitemm: React.FC = () => {
  const navigate = useNavigate();
  const fetProductById = async (id: string) => {
    const { data } = await getById(id);
    return data;
  };
  const { id } = useParams();
  // useEffect(() => {
  //   if (id) {
  //     fetProductById(id);
  //   }
  // }, []);
  const [collapsed, setCollapsed] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
      if (id) {
        return await fetProductById(id);
      }
    },
  });
  const onSubmit = async (data: updateForm) => {
    try {
      if (id) {
        const reponse = await update(id, data);
        console.log(reponse);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div style={{ width: 256, height: 200 }}>
            <Menu
              style={{ height: 850 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-4 lg:p-12">
            <form
              action=""
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="mt-10 text-[20px] font-medium">
                Thêm mới Sản phẩm
              </h3>
              <div className="grid grid-cols-3 gap-10 mx-auto items-center">
                <div className="col-span-1">
                  <input
                    type="file"
                    className="block w-full text-gray-500 rounded-lg border bg-white border-gray-200 p-20 text-sm
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "/>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Mô tả ngắn:"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      // {...register("description")}
                    ></textarea>
                    <p className="text-red-600 text-[10px]">
                      {/* {errors.description && errors.description.message} */}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 space-y-2">
                  <h4>Thông tin sản phẩm</h4>
                  <hr />
                  {/* <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}> */}
                  <div>
                    <label>Tên sản phẩm</label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      {...register("name")}
                    />
                    <p className="text-red-600 text-[10px]">
                      {errors.name && errors.name.message}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label>Giá gốc</label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        {...register("price")}
                        type="number"
                      />
                      <p className="text-red-600 text-[10px]">
                        {errors.price && errors.price.message}
                      </p>
                    </div>

                    <div>
                      <label>Giá khuyến mãi</label>
                      <input
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        {...register("original_price")}
                        type="number"
                      />
                      <p className="text-red-600 text-[10px]">
                        {errors.original_price && errors.original_price.message}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label>Danh mục</label>
                    <select
                      name=""
                      id=""
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    >
                      <option value="">Laptop</option>
                      <option value="">Đt</option>
                      <option value="">Ipad</option>
                      <option value=""></option>
                    </select>
                    <p className="text-red-600 text-[10px]">
                      {/* {errors.name && errors.name.message} */}
                    </p>
                  </div>
                  <div>
                    <label>Ảnh</label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      {...register("image")}
                    />
                    <p className="text-red-600 text-[10px]">
                      {errors.image && errors.image.message}
                    </p>
                  </div>
                  <div>
                    <label>Mô tả dài</label>

                    <textarea
                      rows={6}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      {...register("description")}
                    ></textarea>
                    <p className="text-red-600 text-[10px]">
                      {/* {errors.description && errors.description.message} */}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Update
                    </button>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updateitemm;
