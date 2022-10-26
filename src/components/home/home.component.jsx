import React,{Component, useState, useEffect} from 'react';
import CardList from '../card-list/card-list.component';



const Home = ({mutualFunds}) => {
  return (
    <div>
      {/* <SearchBox /> */}
      <CardList mutualFunds={mutualFunds}/>
      <div></div>
    </div>
  )
}

export default Home;
