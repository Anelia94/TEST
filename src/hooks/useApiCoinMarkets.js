import { useState, useEffect } from 'react';

const useApiCoinMarkets = () => {
  const [coinMarkets, setCoinMarkets] = useState([]);

  const [error, setError] = useState('');

  useEffect(() => {
      (async () => {
        try {
          const result = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false');

          const data = await result.json();
          setCoinMarkets(data);
        } catch (err) {
          setError(err.message || 'Unexpected Error');
        }
      })();
  }, []);

  return [
    coinMarkets,
    error,
  ];
};

export default useApiCoinMarkets;