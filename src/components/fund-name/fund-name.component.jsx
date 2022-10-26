import React,{Component, useState, useEffect} from 'react';
import CardList from '../card-list/card-list.component';
import './fund-name.styles.css';
import { Link } from 'react-router-dom';



const FundName = ({mutualFundName}) => {
  return (
    <div className='Fund-name-div'>
        <div className='Fund-name'>
        <h3>
           {/* <a href={`/mutual-fund-detail/${mutualFundName.key}`}><span>
               {mutualFundName.name}
               </span></a> */}
               <Link to={`/mutual-fund-detail/${mutualFundName.key}`}>
               <span>
               {mutualFundName.name}
               </span>
               </Link>
            </h3>
        </div>
        <div className='Fund-type'>
        <h4>{mutualFundName.category}</h4>
        </div>   
    </div>
  )
}

export default FundName;