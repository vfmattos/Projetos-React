import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Info = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/products/${id}`

    const { data } = useFetch(url)
  return (
    <div>
        <p>{data?.description}</p>
    </div>
  )
}

export default Info