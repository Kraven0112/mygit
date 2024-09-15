import { useState } from "react"
import Allproduct from "./Allproduct.jsx"
import Searchbar from "./Searchbar.jsx"

const Connection = () => {
    const[query,setQuery] = useState('')
    const [category,setCategory] = useState('')
    return (
        <>
        <Searchbar func1={setQuery} func2={setCategory} />
        <Allproduct query={query} category={category} />
        </>
    )
}
export default Connection