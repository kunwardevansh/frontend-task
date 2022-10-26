import React, {Component, useEffect, useState} from 'react';
import FundName from '../fund-name/fund-name.component';
import FundInformation from '../fund-information/fund-information.component';
import './card.styles.css'

const Card =({mutualFunds}) => (

    <div className='Fund-card'>
     {mutualFunds.map((mutualFund) => {
         console.log(mutualFund);
       return (
   <div className='Fund-card-body'>
       <div className='fund-name-div-left'>
       <FundName mutualFundName={mutualFund} />
       </div>
       <div className='fund-name-div-right'>
       <FundInformation mutualFundInformation={mutualFund}/>
       </div>
       </div>
   )})}
   </div>
);

export default Card;