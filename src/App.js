import './App.css';
import React, { useEffect, useState } from 'react';
import Coin from './Coin'

function App() {

  //Setting the coin and the search useStates
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  //fetching to the api and getting the setting the json to coins using setCoins
  useEffect(async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    let data = await fetch(url);
    let parsedData = await data.json()
    setCoins(parsedData)
  }, [])

  //Update value function to update the value of coins using setCoin method
  const updateValue = async () => {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    let data = await fetch(url);
    let parsedData = await data.json()
    setCoins(parsedData)
  }

  //Calling updateValue function after a 15s delay to refresh the page every 15s.
  setInterval(() => {
    updateValue()
  }, 15000);

  //Configuring the search bar
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  //function for the proper functioning of search bar
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
    {/* Navigation bar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{}}>
        <div class="container-fluid" style={{ fontSize: '28px' }}>
          <a class="navbar-brand" href="#" style={{ fontSize: '28px' }}>Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Table to store the data of crypto currencies */}
      <table class="table table-dark table-hover align-middle my-3 table-responsive-sm" style={{ overflow: 'scroll' }}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
            <th scope="col">Price Change</th>
            <th scope="col">Market Cap.</th>
          </tr>
        </thead>
        <tbody>
          {/* Using the filteredCoins to get the coin according to our search results */}
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                price={coin.current_price}
                pricechange={coin.price_change_percentage_24h} />
            );
          })}
        </tbody>
      </table>

      {/* Footer of the Web page */}
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Anurag Deo</small>
        </div>
      </footer>
    </>
  );
}

export default App;
