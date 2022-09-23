import React from "react";
import { useState } from "react";

export const InputGif = ({ addNewValue }) => {
  const [valueInput, setValueInput] = useState("");
  const handlerOnChange = (e) => setValueInput(e.target.value);
  const handlerOnSubmit = (e) => {
    e.preventDefault();
    if (valueInput.length < 2) return;
    addNewValue(valueInput);
    setValueInput("");
  };
  return (
    <form onSubmit={handlerOnSubmit}>
      <input
        type="text"
        onChange={handlerOnChange}
        value={valueInput}
        placeholder="Ingresa el gif a buscar"
      />
    </form>
  );
};
