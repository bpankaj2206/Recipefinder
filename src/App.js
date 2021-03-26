import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';

import './App.css';

const App = () => {
  const APP_ID="c931c8b0";
  const APP_KEY="82dbd9c035c77464aff4680e2664d420";
 

const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState("");
const [query,setQuery]=useState('');


 useEffect( () => {getRecepies();},[query]);

 const getRecepies=async () =>{
   const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
 setRecipes(data.hits);
  console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e =>{
   e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="APP" >
     
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text"  value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">search</button>
     </form>
     <div className="recipes">
     {recipes.map(recipe =>(
      <Recipe tittle={recipe.recipe.label}
      calories={recipe.recipe.calories}
      image={recipe.recipe.image} 
      ingredients={recipe.recipe.ingredients}
      // healthLabels={recipe.recipe.healthLabels}
      />
     
     ))}</div>
     {/* <h1 onClick={()=>setCounter(counter+1)} >{counter}</h1> */}
     
    </div>
  );
}

export default App;
