import React from 'react'
import { useState } from 'react';

const Wallet = () => {
    const [account,setAccount]=useState('');

  const getConnected=async()=>{
         if(window.ethereum){
          const wallet=await window.ethereum.request({method:'eth_requestAccounts'});
          console.log(wallet);
          setAccount(wallet[0]);
         }else{
          alert("enable to connect. please ,download the  metamask wallet");
         }
  }
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-medium text-lime-500'>MetaMask Wallet</h1>

      <p className='text-gray-300 py-4'>MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain.MetaMask allows users to store and manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and securely connect to decentralized applications through a compatible web browser or the mobile app's built-in browser.</p>
        <p className='text-gray-300'>
          Click on <span className='text-green-500'>Connect wallet</span> to get Started !
        </p>
       <p className='text-gray-300'>To get connected with wallet, you must have MetaMask Downloaded, To download MetaMask <a href="https://chromewebstore.google.com/detail/nkbihfbeogaeaoehlefnkodbefgpgknn" className='font-medium text-green-500'>click here.</a></p>
      <div className='flex justify-center items-center flex-col'>
        <img src='/MetaMask_Fox.png' className='h-[250px]'/>
        <button className='px-8 py-3 border-2 border-[#2AB42A] text-[#2AB42A] rounded-md hover:shadow-md hover:shadow-[#2AB42A]' onClick={getConnected}>{account ? `connected:${account.substring(0,6)}...`:'connect wallet'}</button>
      </div>

    </div>
  )
}

export default Wallet
