import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";



const Product = () => {

    const { id } = useParams();

    const url = `http://localhost:3000/products/${id}`	

    const { data } = useFetch(url)

  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>{data?.price}</h2>
      <Link to={`/products/${id}/info`}><button>Detalhes</button></Link>
    </div>
  )
}

export default Product