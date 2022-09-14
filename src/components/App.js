import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import FilterButton from "./FilterButton";

const API = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  const [filterLikes, setFilterLikes] = useState(false)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    setToys([...toys, newToy])
  }

  const toysFiltered = toys
    .sort((toy1, toy2) => {
      if(filterLikes === false){
        return toy1.name.localeCompare(toy2.name)
      }
      else if(filterLikes=== true){ return toy2.likes-toy1.likes}
    })

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} API={API} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <div className="buttonContainer">
        <FilterButton filterLikes={filterLikes }setFilterLikes={setFilterLikes} />
      </div>
      <ToyContainer toys={toysFiltered} setToys={setToys} API={API}/>
    </>
  );
}

export default App;