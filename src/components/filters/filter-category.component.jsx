import React,{useState, useEffect, Component} from 'react';

const FilterCategory =({onFilterChangeHandler}) =>{
 return(
     <div className='filters'>
         <div className='filter-heading'>
         <h3>Filter By Category : </h3>
         </div>
         <div className='filter-types'>
         <label for='equity'>   Equity  </label>
        <input type="radio" id='equity' name='filter' value='Equity' onChange={onFilterChangeHandler}/>
        <label for='debt'>   Debt  </label>
        <input type="radio" id='debt' name='filter' value='Debt' onChange={onFilterChangeHandler}/>
        <label for='both'>   Both  </label>
        <input type="radio" id='both' name='filter' value='' onChange={onFilterChangeHandler}/>
         </div>
         

     </div>
 )
}

export default FilterCategory;