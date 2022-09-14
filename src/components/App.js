import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} API={API} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} API={API}/>
    </>
  );
}

export default App;

// function handleAddQuestion(newQuestion){
//   setQuestions([...questions, newQuestion])
// }
