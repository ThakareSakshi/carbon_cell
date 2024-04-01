import React, { useState } from 'react'


const Header = () => {

  const [account,setAccount]=useState('');

  const getConnected=async()=>{
         try{
          if(window.ethereum){
            const wallet=await window.ethereum.request({method:'eth_requestAccounts'});
            console.log(wallet);
            setAccount(wallet[0]);
           }else{
            alert("enable to connect. please ,download the  metamask wallet");
           }
         }catch(err){
          alert("something went wrong",err.message);
         }
  }
  return (
    <div className='p-6 flex justify-between items-center max-md:flex-col'>
        <div>
            <h1 className='font-medium text-4xl text-white max-md:text-xl'>Hello, <span className='text-lime-500'>Brooklyn Simmons</span></h1>
            <h3 className='font-medium text-2xl text-white py-2 max-md:text-lg'>Welcome to <span className='text-green-500'>Carbon Cell !</span></h3>
            
        </div>

        
          
            <button className='px-4 py-2 text-white text-lg  max-md:text-sm bg-[#2AB42A] rounded-md hover:shadow-md hover:shadow-[#2AB42A] hover:bg-transparent hover:text-[#2AB42A] border-2 border-[#2ab42a]' onClick={getConnected}> {
              account ? `connected:${account.substring(0,6)}...`:'connect wallet'
}</button>
        
      
    </div>
  )
}

export default Header
