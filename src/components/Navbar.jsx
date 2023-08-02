import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillTag,
  AiFillHome,
  AiFillContacts,
} from "react-icons/ai";
import { MdProductionQuantityLimits, MdArticle } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import  FcAbout from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {

    const [Nav, setNav] = useState(false);

    const navigate = useNavigate();
    function gotoberanda() {
      navigate("/");
    }
    function gotoabout() {
      navigate("/Tentang Kami");
    }
    function gotoproduk() {
      navigate("/produk");
    }
    function gotoblog() {
      navigate("/blog");
    }
    function gotokontak() {
      navigate("/kontak");
    }
    function gotologin() {
      navigate("/login");
    }

  return (
    <div>
           <div className="max-w-[1640px] mx-auto flex justify-between items-start p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!Nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <div className="text-2xl sm:text-3xl lg:text-4xl px-4">
          <h1>
            <span className="text-blue-500 font-semibold">WIJAYA </span>
            <span className="font-bold">BERSAMA</span>
          </h1>
        </div>
      </div>
      {/* Search input */}
      <div className="bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <input
          className="bg-gray-300 p-2 rounded-full focus:outline-none w-[200px] sm:w-[400px] lg:w-[500px]"
          type="text"
          placeholder="Cari"

        />
        
   
      </div>

      {/* mobile Menu */}
      {/* overlay */}
      {Nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side Drawer menu */}
      <div
        className={
          Nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!Nav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          <span className="text-blue-500 font-semibold">WIJAYA </span>
          <span className="font-bold">BERSAMA</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <AiFillHome size={25} className="mr-4 text-blue-500" />
              <button onClick={gotoberanda}> Beranda</button>
            </li>

            <li className="text-xl py-4 flex">
              <AiFillContacts size={25} className="mr-4 text-blue-500" />
              <button onClick={gotoabout}> Tentang Kami</button>
            </li>

            <li className="text-xl py-4 flex">
              <MdProductionQuantityLimits
                size={25}
                className="mr-4 text-blue-500"
              />
              <button onClick={gotoproduk}> Produk </button>
            </li>
            <li className="text-xl py-4 flex">
              <MdArticle size={25} className="mr-4 text-blue-500" />
              <button onClick={gotoblog}>Blog</button>
            </li>
            <li className="text-xl py-4 flex">
              <AiFillContacts size={25} className="mr-4 text-blue-500" />
              <button onClick={gotokontak}>Kontak</button>
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4 text-blue-500" />
              <button onClick={gotologin}>Login Admin</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
  )
}

export default Navbar