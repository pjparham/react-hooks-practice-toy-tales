import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

function ToyCard({ toy, API, handleDeleteToy, handleUpdateToy }) {
  const {name, image, likes} = toy 

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteToy(toy));
  }

  function handleLikeChange(e){
    fetch(`${API}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "likes": (likes + 1)
      })
    })
    .then ((r) => r.json())
    .then ((updatedToy) => handleUpdateToy(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeChange}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;


