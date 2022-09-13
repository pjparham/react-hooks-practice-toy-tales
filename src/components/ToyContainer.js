import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ API, toys, setToys }) {

  useEffect(() => {
    fetch(API)
    .then ((r => r.json()))
    .then((toyData) => setToys(toyData))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    function handleDeleteToy(deletedToy){
      const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id);
      setToys(updatedToys)
    }

    function handleUpdateToy(updatedToy){
      const updatedToys = toys.map((toy) => {
        if (toy.id === updatedToy.id) {
          return updatedToy
        } else {return toy}
      });
      setToys(updatedToys)
    }

  const showToys = toys.map((toy) => {
   return <ToyCard handleUpdateToy={handleUpdateToy} handleDeleteToy={handleDeleteToy} API={API} key={toy.id} toy={toy} />
  })

  return (
    <div id="toy-collection">{showToys}</div>
  );
}

export default ToyContainer;
