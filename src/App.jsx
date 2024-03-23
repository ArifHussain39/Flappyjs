import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  let products = [
    { id: 1, name: "product 1" },
    { id: 2, name: "product 2" },
    { id: 3, name: "product 3" },
    { id: 4, name: "product 4" },
    { id: 5, name: "product 5" },
  ];
  

  return (
    <>

      <ul>
        {
         products?.map(product => <li key={product.id} > {product.name} </li>)

        }
      </ul>

      {
        products ? <h1>Products</h1> : <h1>No Products</h1>
      }


    </>
  )
}

export default App
