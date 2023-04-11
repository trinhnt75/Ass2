import { useEffect, useState } from "react";
import { IProduct } from "../../../../models";
import { getAll, getUser, remove } from "../../../../api/product";
import Product from "../../../product";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu, MenuProps, message, Popconfirm, Space } from "antd";
import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    const { data } = await getAll();
    console.log(data);

    setProducts(data);
  };
  const removeProduct = async (id: any) => {
    try {
      if (id) {
        const reponse = await remove(id);

        console.log(reponse);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = [
    getItem("Sản phẩm chung", "1", <PieChartOutlined />),
    getItem("Laptop", "2", <DesktopOutlined />),
    getItem("Âm thanh", "3", <ContainerOutlined />),
  ];

  return (
    <div className="grid grid-cols-4 max-w-screen-2xl  mx-auto">
      <div className="col-span-1 block space-y-4 ">
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
      </div>
      <div className="col-span-3 bg-gray-100 h-full px-20">
        <div className="py-8">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-[#5F5E61] leading-tight">
              Điện thoại
            </h2>
            <Link
              className="text-2xl mr-[60px] text-[#00B0D7] font-semibold leading-tight"
              to={"/admin/add"}
            >
              Thêm
            </Link>
          </div>
          <span className="text-[#5A6169] text-[16px] py-4">
            Danh mục sản phẩm
          </span>
          <div className="my-2 flex sm:flex-row flex-col">
            <div className="flex flex-row mb-1 sm:mb-0">
              <div className="relative">
                <select className=" h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-[352px] bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                  <option>All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Tên sản phẩm
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Giá
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Giá khuyến mãi
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Hình ảnh
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product, index) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {index + 1}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          <Link to={`/admin/product/${product._id}`}>
                            {product.name}
                          </Link>
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.price}đ
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {product.original_price}đ
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <img src={product.image} alt="" className="w-[100px]" />
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <Link to={`/admin/product/${product._id}`}>
                          <Button
                            type="primary"
                            style={{
                              color: "blue",
                              width: "80px",
                            }}
                          >
                            Sửa
                          </Button>
                        </Link>

                        <Space size="middle" direction="vertical">
                          <Popconfirm
                            placement="top"
                            title={"Bạn có chắc muốn xóa không ?"}
                            onConfirm={() => removeProduct(product._id)}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button
                              type="primary"
                              danger
                              // onClick={() => removeProduct(product.id)}
                            >
                              <a>Delete</a>
                            </Button>
                          </Popconfirm>
                        </Space>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span className="text-xs xs:text-sm text-gray-900">
                  Hiển thị 1 đến 4 trong số 50 mục nhập
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    -
                  </button>
                  <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
