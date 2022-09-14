import React, { useState } from "react";

function ToyForm({ API, addNewToy }) {
  const[formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function createToy(event){
    event.preventDefault();
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData) 
    })
    .then((r) => r.json())
    .then((newToy) => addNewToy(newToy))
    setFormData({
      name: "",
      image: "",
      likes: 0,
    })
  }

  return (
    <div className="container">
      <form onSubmit={createToy} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

