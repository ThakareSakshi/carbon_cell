import React, { useState ,useEffect} from 'react';
import Coin from './Coin';
import axios from 'axios';
const Carousel = ({ id }) => {
  const [scrollX, setScrollX] = useState(0);
  const [trendindCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const response = await axios.request({
        method: "get",
        url: "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-uzug2oPsswL8SZt4drLPdZor",
      });

      const coins = response.data.coins;
      const minCoins=coins.filter((coin,index)=>index<8);

      setTrendingCoins([...minCoins]);
    }
    fetchCoins();
  }, []);


  return (
   <div className='flex  overflow-hidden'>
     <div className="relative w-[100%] overflow-hidden p-4 m-2 ">
      <div id={id} className="flex gap-4 overflow-x-auto scrollbar-hide p-2 flex-wrap justify-around">
      {trendindCoins.map((coin) => {
          return <Coin coin={coin} />;
        })}
      </div>
     
    </div>
   </div>
  );
};

export default Carousel;
