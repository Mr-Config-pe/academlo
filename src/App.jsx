
import "./App.css";
import { useState } from "react";
import quotes from "../quotes.json"
import images from "./assets/images/imgexp"
import QuoteBox from "./QuoteBox";
import ButtonBox from "./ButtonBox";
import Redsocial from "./Redsocial";
// import testPhoto from "./assets/images/author"

// Inicio de la Funcion

const App = () => {

  // Random del Quote
  const quoteRandom = Math.floor(Math.random() * quotes.length - 1);

  //Metiendole Esteroides al Quote
  const [indexQuote, setIndexQuote] = useState(quoteRandom);

  // Accion del Boton
  const randomCard = () => {
    const clickRandom = Math.floor(Math.random() * quotes.length);
    setIndexQuote(clickRandom);
  };

  // Colores Random
  const colours = ["#0244f4", "#8559dd", "#dd303f", "#8efdb1", "#8eb82e",
    "#0ecf17", "#67b9d2", "#476ee4", "#957db6", "#efb74a", "#c02ede", "#514c6e",
    "#e87109", "#0197a6", "#bba150", "#ed70cb", "#46e5e7", "#ae1453", "#4917df",
    "#ffaf28", "#000000", "#9a2121", "#418557", "#f44336", "#222222", "#16537e",
    "#905d5d", "#4d9385", "#00bfaf", "#fd8a5e", "#bbbbbb", "#beae9c", "#00563f"];
  const randomColours = Math.floor(Math.random() * colours.length);

  //Color Random al Body
  document.body.style.background = colours[randomColours];

  console.log(quotes)
  return (
    <div className="container-global">
    <div className="container-card" style={{ color: colours[randomColours], opacity: 0.9 }}>
      {/* Icono Comillas */}
      <div className="container-450-author">
        <div className="container-img-author" style={{ background: colours[randomColours], opacity: 0.9 }}>
          <img className="img-author" src={images[indexQuote]} />
        </div>
      </div>
      <div className="iconBox">
        <i
          className="fa-solid fa-quote-left"
          style={{ color: colours[randomColours], opacity: 0.9 }}
        ></i>
      </div>

      {/* Mensaje y Autor */}
      <QuoteBox
        quotePhrase={quotes[indexQuote].quote}
        quoteAuthor={quotes[indexQuote].author} />

      {/* Boton Random */}
      <ButtonBox
        actionButtonBox={randomCard}
        colourButton={colours[randomColours]} />
    </div>
    <div className="container-redsocial">
      <Redsocial />
    </div>
    </div>
  );

};

//Fin de la Funcion

export default App;

