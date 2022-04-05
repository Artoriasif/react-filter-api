import React, { useEffect, useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import axios from "axios";

const api = `https://jogo-library.herokuapp.com/jogo/`;

export default function App() {
  const [jogos, setJogos] = useState(null);
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
      {text && !jogos ? (
        <span>Carregando...</span>
      ) : (
        <>
          <ul>
            {jogos ? (
              <>
                {jogos.map((jogos) => (
                  <li key={jogos.id}>
                    <img src={jogos.link_image} alt="uga" />
                    {jogos.title}
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </>
      )}
    </div>
  );
}
