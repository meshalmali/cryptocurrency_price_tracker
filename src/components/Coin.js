import React from "react";
import "./Coin.css";

function Coin({ name, image, symbol, volume, price, priceChange }) {
  return (
    <div className="coin">
      <div className="coin_row">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p className="coin_symbol">{symbol}</p>

        <div className="coin_data">
          <p className="coin_price">INR {price}</p>
          <p className="coin_volume">INR {volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin_percent_red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin_percent_green">{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
