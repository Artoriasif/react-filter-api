import React, { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import axios from "axios";

const api = `https://jogo-library.herokuapp.com/jogo/`;

export default function App() {
  const [jogos, setJogos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const getJogos = async () => {
      try {
        const response = await axios.get(`${api}filter?title=${text}`);
        if (response != null) {
          setJogos(response.data.results);
          console.log("jogos", response.data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJogos();
  }, [text]);

  return (
    <div className="App">
      <h1>jogos</h1>.
      <SearchInput value={text} onChange={(search) => setText(search)} />
      {text && !jogos.data && <span>Carregando...</span>}
      {jogos.data && (
        <ul>
          {jogos.data.map((jogo) => (
            <li key={jogo.result.id}>
              <img src={jogo.result.link_image} alt="uga" />
              {jogo.result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
