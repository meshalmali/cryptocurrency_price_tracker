import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        console.log("I am the response", response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    //console.log("I am search", search);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("filtered coinsss", filteredCoins);

  return (
    <div className="coin_app">
      <div className="coin_search">
        <h1>Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
