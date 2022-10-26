import { sliderClasses } from '@mui/material';
import React, {Component, useState, useEffect} from 'react';
import './return-calculator.styles.css'




const ReturnCalculator = ({requiredMutualFund}) =>{

    const[investmentValue,setInvestmentValue] = useState(0);

    let oneYearReturn = Math.floor(investmentValue + ((investmentValue*requiredMutualFund.year_1)/100));
    let threeYearReturn = Math.floor(investmentValue + ((investmentValue*requiredMutualFund.year_3)/100));
    const[oneYearReturnValue,setOneYearReturnValue] = useState(oneYearReturn);
    const[threeYearReturnValue,setThreeYearReturnValue] = useState(threeYearReturn);

    const onSliderChange=(event)=>{
        const newInvestmentValue = parseInt(event.target.value,10);
        oneYearReturn = Math.floor(newInvestmentValue + ((newInvestmentValue*requiredMutualFund.year_1)/100));
        threeYearReturn = Math.floor(newInvestmentValue + ((newInvestmentValue*requiredMutualFund.year_3)/100));
        setOneYearReturnValue(oneYearReturn);
        setThreeYearReturnValue(threeYearReturn);
        setInvestmentValue(newInvestmentValue);
    }

    return(
        <div>
            <h2>Return Calculator</h2>
            <div>
                <h3>One Time SIP</h3>
            </div>
            <div>
                <h4>  ₹ {investmentValue} one-time</h4>
            <input className='slider' type='range' min='0' max='100000' onChange={onSliderChange}></input>
            <h4>One year return : {oneYearReturnValue}</h4>
            <h4>Three year return : {threeYearReturnValue}</h4>
            </div>
        </div>
    )
}

export default ReturnCalculator;