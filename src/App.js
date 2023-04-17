import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
const [data, setData] = useState([]);

useEffect(() => {
  axios.get("https://node-product-management.vercel.app/products/")
  .then((response) => {
    setData(response.data.Products)
  })
}, []);

return (
  <>
  <h1>Product Management functionality</h1>
  {data.map((item) => {
    return (
      <div key={item._id}>
      <p>{item.productname}</p>
      <img src={item.images} alt="productImage" />
      </div>
    )
  })}
  </>
)
  
}

export default App;
