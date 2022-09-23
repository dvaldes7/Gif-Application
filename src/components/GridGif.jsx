import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { findGif } from "../helpers/gifApi";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ItemGif } from "./ItemGif";

export const GridGif = ({ nameGif }) => {
  const { isLoading, items } = useFetchGifs(nameGif);

  return (
    <>
      <h3>{nameGif}</h3>
      <div className="grid-card">
        {items.map((gif) => (
          <ItemGif key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
