import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
    <h1>Movies Page</h1>
      {movies.map((item)=>{
        return(
          
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.time}</p>

            <p>Genres: </p>
            <ul>
            {item.genres.map((item) => <li key={item}>{item}</li>)}
            </ul>
            </div>
            );
          })}

          </div>
      
      );
    }
export default Movies;
