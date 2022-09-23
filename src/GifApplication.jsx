import { useState } from "react";
import { GridGif, InputGif } from "./components";

export const GifApplication = () => {
  const [valueInput, setValueInput] = useState([]);
  const addNewValue = (value) => {
    setValueInput([value]);
  };
  return (
    <>
      <h1>Gif Applicatión</h1>
      {/**BUSCADPR DE PALABRAS */}
      <InputGif addNewValue={addNewValue} />
      {valueInput.map((name) => (
        <GridGif key={name} nameGif={name} />
      ))}
      {/**Grid de imagenes */}
    </>
  );
};
