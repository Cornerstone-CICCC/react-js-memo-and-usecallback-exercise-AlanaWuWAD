import { useState } from "react"
import Profile from "./components/profile"
import ProductList from "./components/ProductList"

const App = () => {
  const [count, setCount] =useState(0)

  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={()=>setCount(count +1)}>count +</button>
      <button onClick={()=>setCount(count -1)}>count -</button>

      <Profile firstname="john" lastname="do" />
      <br />
      <ProductList/>

    </div>
  )
}

export default App