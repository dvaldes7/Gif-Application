import React from "react";

export const ItemGif = ({ id, title, url }) => {
  return (
    <div className="card-item">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
