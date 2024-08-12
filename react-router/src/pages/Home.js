import React from "react";
import { useFetch } from "../hooks/useFetch";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/products");

  return (
    <div className="home">
      <ul>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <Link to={`/products/${item.id}`}><button>Detalhes</button></Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
