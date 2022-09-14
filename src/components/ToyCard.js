import React from "react";

function ToyCard({ toy, API, handleDeleteToy, handleUpdateToy }) {
  const {name, image, likes} = toy 

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteToy(toy));
  }

  function handleLikeIncrease(e){
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

  function handleLikeDecrease(e){
    fetch(`${API}/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "likes": (likes - 1)
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
      <span>
        <button className="like-btn" onClick={handleLikeIncrease}>Like {"<3"}</button>{" "}
        <button className="like-btn" onClick={handleLikeDecrease}>Dislike {"</3"}</button>
      </span>
      <button className="del-btn" onClick={handleDeleteClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;


