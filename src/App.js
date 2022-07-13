import CoinCard from './components/CoinCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import useApiCoinMarkets from './hooks/useApiCoinMarkets';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [markets] = useApiCoinMarkets();

  const [currentPage, setCurrentPage] = useState(1);

  const [marketsPerPage] = useState(10);

  //Get current markets
  const indexOfLastMarket = currentPage * marketsPerPage;
  const indexOfFirstMarket = indexOfLastMarket - marketsPerPage;
  const currentMarkets = markets.slice(indexOfFirstMarket,indexOfLastMarket);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <ul>
        {currentMarkets.map((market, id) => <CoinCard
          key={'market' + id}
          props={market} />)}
      </ul>
      <Pagination
       marketsPerPage={marketsPerPage}
       totalMarkets={markets.length}
       paginate={paginate}/>
    </div>
  );
}

export default App;
