import React, { useEffect, useState } from 'react'
import CryptosCard from './CryptosCard';
import EuroIcon from '@mui/icons-material/Euro';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Carousel from './Carousel';

const Cryptos = () => {

    const [prices,setPrices]=useState([]);


    const fetchCurrentPrices= async()=>{
         const response=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
         const result=await response.json();

         setPrices(result.bpi);
         console.log();
    }

    useEffect(()=>{
          fetchCurrentPrices();
    },[]);
  return (
    <div className='p-6 w-full flex flex-col'>
        <h1 className=' text-3xl font-medium text-lime-500 max-md:text-xl'>Bitcoin Prices</h1>

        {
            prices && <div className='p-5 flex gap-4 max-md:flex-wrap'>
            <CryptosCard color="#1B9355"  icon={<AttachMoneyIcon/>} {...prices.USD}/>
            <CryptosCard color="#9FFF9D"  icon={<CurrencyPoundIcon/>} {...prices.GBP}/>
            <CryptosCard color="#77F534" icon={<EuroIcon/>} {...prices.EUR}/>
            
        </div>

        }
        <h1 className='text-white text-2xl font-medium max-md:text-lg'>you may also Like</h1>

        {/* <div id="carousel" className='w-[90%]'> */}
        <Carousel id={"carousel"}/>
        
        

        
      
    </div>
  )
}

export default Cryptos
