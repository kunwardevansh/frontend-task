import React,{Component, useState, useEffect} from 'react';
import CardList from '../card-list/card-list.component';
import './fund-information.styles.css'
import { Typography } from '@mui/material';


const FundInformation = ({mutualFundInformation}) => {
  return (
    <div className='fund-information'>
        <div className='fund-information-indepth-div'>
            <div className='fund-attribute'>
                <h4>NAV</h4>
                </div>
            <div className='fund-value'>₹{mutualFundInformation.current_nav}</div>
        </div>
        <div className='fund-information-indepth-div'>
            <div className='fund-attribute'>
                <h4>1 Y</h4>
                </div>
            <div className='fund-value'>{mutualFundInformation.one_year_return}</div>
        </div>
        <div className='fund-information-indepth-div'>
            <div className='fund-attribute'>
                <h4>3 Y</h4>
                </div>
            <div className='fund-value'>{mutualFundInformation.three_year_return}</div>
        </div>
    </div>
  )
}

export default FundInformation;