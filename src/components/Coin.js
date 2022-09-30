import React from "react";
import "./Coin.css";

function Coin({ name, image, symbol, volume, price, priceChange }) {
  return (
    <div className="coin">
      <div className="coin_row">
        <div className="coin_details">
          <div className="coin_img">
            <img src={image} alt="" />
          </div>
          <div className="coin_name">
            <h1>{name}</h1>
          </div>
          <div className="coin_symbol">
            <p className="coin_symbol">{symbol}</p>
          </div>
        </div>

        <div className="coin_data">
          <div className="coin_price">
            <p className="coin_price">INR {price}</p>
          </div>
          <div className="coin_vol">
            <p className="coin_volume">INR {volume.toLocaleString()}</p>
          </div>
          <div className="coin_percent">
            {priceChange < 0 ? (
              <p className="coin_percent_red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin_percent_green">{priceChange.toFixed(2)}%</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coin;
