import { useEffect, useState } from "react";
import { getAll } from "../api/product";
import Product from "../components/product";
import { IProduct } from "../models";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const { data } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-[30px]">
      <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/04/05/sale-samsung-s23-sr-01.jpg" alt="" className="mx-auto mt-7 mb-6 w-[200%]" />
      <h1 className="mt-8 mb-10 font-medium text-lg text-center">
        ĐIỆN THOẠI NỔI BẬT NHẤT
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Product data={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
