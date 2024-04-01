
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideNavaigationBar/SideBar'
import Header from './components/Main/Header'
import Graph from './components/Graph/Graph'
import Cryptos from './components/CryptoCurrencies/Cryptos'
import Wallet from './components/Wallet/Wallet'


function App() {
  

  return (
    <div className='bg-[#0B0B0B] flex w-full max-lg:flex-col'>
      <SideBar/>
      <div className='w-[78%] max-lg:w-full'>
        <section id="task1">
        <Header/>
        <Graph/>
        </section>
        <section id="task2" className=''>
        <Cryptos/>
        </section>
        <section id='task3'>
          <Wallet/>
        </section>
      </div>
    </div>
  )
}

export default App
