import React, { use, useState} from "react";
import Links from "./Links";
import navImg from '../../assets/Group 3466088.png'
import { Bell, Menu, X } from "lucide-react";

const Navbar = ({ navDataPromise}) => {
  console.log(navDataPromise);
  const navItems = use(navDataPromise);
  console.log(navItems);

  const links = navItems.map((perItem) => (
          <Links perItem={perItem} key={perItem.id}></Links>
        ))

        const [open, setOpen] = useState(false);
        const handleMenu = ()=>{
            setOpen(!open)
        }
 
  return (
    <nav className="w-11/12 mx-auto bg-[#FFFFFF] p-5 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span onClick={handleMenu}> {open? <X color="#e40749" />:<Menu color="#07e433" className="md:hidden"/>} </span>
         <ul className={`md:hidden absolute ${open? 'top-13':'-top-40'} bg-blue-500 p-2 rounded-md duration-700 text-white`}>
            {links}
        </ul>
       <div>
         <span className="text-[#003EA4]">Auction</span>
        <span className="text-[#FFD337] font-semibold">Gallery</span>
       </div>
      </div>

      <ul className="items-center gap-6 hidden md:flex">
        {links}
      </ul>

      <div className="flex items-center gap-5">
        <div className="indicator">
          <span className="indicator-item badge rounded-full bg-cyan-500">12</span>
          <button className="p-1 bg-slate-200 rounded-full"><Bell /></button>
        </div>

        <img src={navImg} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
