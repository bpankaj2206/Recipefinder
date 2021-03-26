import React from 'react';
import Style from './recipe.module.css';

const Recipe = ({tittle,calories,image,ingredients,healthLabels}) =>{
return (
    <div className={Style.recipe}>
        <h1>{tittle}</h1>
        <ol>{ingredients.map(ingredient =>(
        <li>{ingredient.text}</li> ))}</ol>
       {/* <p>{calories}</p>*/}
        <img  className={Style.image} src={image} alt=""/>
        {/* <h5 className={Style.healthLabels}>{healthLabels.map(healthLabels=>(<li>{healthLabels}</li>))}</h5> */}
           </div>
);

};

export default Recipe;