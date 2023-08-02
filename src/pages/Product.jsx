import React, { useState } from "react";
import { data } from "../Data/Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  // console.log(data);
  const [foods, setFoods] = useState(data);

  // Fillter System
  const filterType=(category)=>{
    setFoods(
      data.filter((item) =>{
        return item.category === category;
      })
      );
  }

  // Filter Price

  const FilterPrice = (Price) =>{
    setFoods(
      data.filter((item) =>{
        return item.price === Price;
      })
    );
  }

  return (
    <>
    <Navbar/>
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-blue-500 font-bold text-4xl text-center">
        Produk <span className="text-blue-700"> kami</span>
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Barang</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              Semua
            </button>
            <button onClick={() => filterType('Adukan')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
            Adukan
            </button>
            <button onClick={() => filterType('Perkakas')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
            Lisplang
            </button>
            <button onClick={(() => filterType ('Cat'))} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              Cat
            </button>
            <button onClick={() => filterType('Keramik')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              Keramik
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Harga</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => FilterPrice('$')} className="m-1 text-blue-500 hover:bg-blue-500 hover:text-white   rounded-xl py-2">
              $
            </button>
            <button onClick={() => FilterPrice('$$')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              $$
            </button>
            <button onClick={() => FilterPrice('$$$')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              $$$
            </button>
            <button onClick={() => FilterPrice('$$$$')} className="m-1 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl py-2">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {
          (foods.
          map((item, index) => (
            <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
              <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
                <p>
                  <span className="bg-blue-500 text-black rounded-full p-1">{item.price}</span>
                </p>
              </div>
            </div>
          )))
        }
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Products;
