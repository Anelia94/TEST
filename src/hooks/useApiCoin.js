import { useState, useEffect } from 'react';

const useApiCoin = (id) => {
  const [coin, setCoin] = useState({});

  const [error, setError] = useState('');

  useEffect(() => {
      (async () => {
        try {
          const result = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

          const data = await result.json();
          setCoin(data);
        } catch (err) {
          setError(err.message || 'Unexpected Error');
        }
      })();
  }, []);

  return [
    coin,
    error,
  ];
};

export default useApiCoin;