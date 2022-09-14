import React from "react";

function FilterButton({ setFilterLikes, FilterLikes }){
    function handleNameClick(){
        setFilterLikes(false)
    }
    function handleLikesClick(){
        setFilterLikes(true)
    }

    return (
        <>
            <span>Filter By:{" "}</span>
            <button onClick={handleNameClick}>Name</button>
            <span>{"   "}</span>
            <button onClick={handleLikesClick}>Likes</button>
        </>

    )
}

export default FilterButton