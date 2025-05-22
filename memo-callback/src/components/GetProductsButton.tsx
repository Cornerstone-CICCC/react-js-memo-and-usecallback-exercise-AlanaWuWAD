import { memo } from "react"

type Props={
    onDisplay: ()=>void
}
const GetProductsButton = memo(({onDisplay}:Props) => {
    console.log("Rendered Button Component")
  return (
    <div>
        <button onClick={onDisplay}>Fetch Products</button>
    </div>
  )
})

export default GetProductsButton