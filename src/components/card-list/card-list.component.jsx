import React, {Component, useState, useEffect} from 'react';
import Card from '../card/card-component';

const CardList = ({mutualFunds}) =>{
    return(
        <div className='card-list'>
            <Card mutualFunds={mutualFunds}/>
        </div>
    );
}

export default CardList;