import React from "react";
const Coin = ({image,name,price,symbol,pricechange,marketcap})=>{
    return(
        
        <tr style={{fontSize:'25px'}}>
      <td> <img src={image} alt="crypto" style={{height:'86px', width:'auto'}} /> {name}</td>
      <td>{symbol}</td>
      <td>Rs. {price.toLocaleString('en-IN')}</td>
      {pricechange>0?
      <td style={{color:'#79FE0C'}}>{pricechange.toFixed(2)}%</td>
    :<td style={{color:'#FF5733'}} >{pricechange.toFixed(2)}%</td>}
      <td>Rs. {marketcap.toLocaleString('en-IN')}</td>
    </tr>
    
    )
}

export default Coin