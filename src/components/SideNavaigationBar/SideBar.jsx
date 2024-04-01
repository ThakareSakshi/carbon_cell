import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import WalletIcon from '@mui/icons-material/Wallet';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import { useState,useEffect } from "react";

const SideBar = () => {

  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isOpened,setIsOpened]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const sections = document.querySelectorAll('section');
      let currentActive = null;

      sections.forEach(section => {
  
        const sectionTop = section.offsetTop - 200; 
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentActive = section.id;
          
        }
      });

      setActiveNavItem(currentActive);
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const section = document.getElementById(id);
    if (section) {
      setActiveNavItem(id);
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust the offset as needed
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="w-[19%]  bg-[#1A1E1C] h-screen p-4 flex flex-col items-center sticky top-0 left-0 max-lg:w-full max-lg:h-fit z-50">

      <div className="flex justify-between items-center w-full">
        {/* -------------logo------------ */}
        <div className="flex items-center">
            <div className="text-4xl font-bold text-lime-500"><WhatshotOutlinedIcon style={{fontSize:"50px"}}/></div>
         <div>
         <h1 className="text-2xl font-bold text-lime-500">Carbon</h1>
          <h2 className="text-xl font-medium text-lime-500">Cell</h2>
         </div>
        </div>
        {/* -----------menu icon------------ */}
        <div onClick={()=>setIsOpened(!isOpened)}>
          <MenuIcon style={{ color: "white" }} />
        </div>
      </div>
      {/* --------search box------------ */}
      <input
        type="search"
        placeholder="Search"
        className="bg-[#333333] text-white p-2 rounded-md w-full my-4 max-lg:hidden"
      />

      {/* -----------------top navigations------------------ */}
     <div className={`w-full flex flex-col max-lg:${isOpened?"flex":"hidden"}`}>
     <div className={`w-full p-2 flex items-center gap-4 ${activeNavItem == 'task1' ? 'text-green-500' : 'text-white'}`} onClick={()=>scrollToSection('task1')}>
        <HomeIcon/>
        <span className={` text-left ${activeNavItem === 'task1' ? 'text-green-500' : 'text-white'}`}>Home</span>
      </div>
      <div className={`w-full p-2 flex items-center gap-4 ${activeNavItem == 'task2' ? 'text-green-500' : 'text-white'}` } onClick={()=>scrollToSection('task2')}>
        <CurrencyBitcoinIcon/>
        <span className={` text-left ${activeNavItem === 'task2' ? 'text-green-500' : 'text-white'}`}>CryptoCurrencies</span>
      </div>
      <div className={`w-full p-2 flex items-center gap-4 ${activeNavItem == 'task3' ? 'text-green-500' : 'text-white'}`} onClick={()=>scrollToSection('task3')}>
         <WalletIcon/>
        <span className={` text-left ${activeNavItem == 'task3' ? 'text-green' : 'text-white'}`}>Wallet</span>
      </div>
     </div>

{/* ---------------Bottom --------------- */}
      <div className={`w-full flex flex-col absolute bottom-0 p-4 max-lg:${isOpened?"flex":"hidden"} max-lg:static max-lg:p-1` }>
      <div className="w-full p-2 flex items-center gap-4 text-white">
         <NotificationsIcon/>
        <span className="text-left ">Notifications</span>
      </div>
      <div className="w-full p-2 flex items-center gap-4 text-white">
         <HelpIcon/>
        <span className="text-left ">Support</span>
      </div>
      <div className="w-full p-2 flex items-center gap-4 text-white">
         <SettingsIcon/>
        <span className="text-left ">Settings</span>
      </div>

{/* ---------------user---------------- */}
      <div className="text-white w-full flex justify-between p-4 bg-[#333333] rounded-lg my-4 max-lg:hidden">
          <div className="">
              <img src=""/>
           </div>
           <div>
                <h3>Brooklyn Simmons</h3>
                <p className="font-thin text-sm text-gray-300">brooklyn@simmons.com</p>
           </div>
           <div>
           <MoreVertIcon/>
           </div>

      </div>
           
      </div>
    </div>
  );
};

export default SideBar;
