// import logo from './logo.svg';
import React,{useState,Components,useEffect} from 'react';
// import './App.css';
import './explore.styles.css'
import Home from '../components/home/home.component';
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import FilterCategory from '../components/filters/filter-category.component';


const List = [
  {
    "key":"1",
    "name": "Bank Of India Credit Risk Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 11.623,
    "three_year_return": 14.437,
    "nav": 10.58
  },
  {
    "key":"2",
    "name": "HDFC Balanced Advantage Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 141.623,
    "three_year_return": 11.437,
    "nav": 28.61
  },
  {
    "key":"3",
    "name": "Aditya Birla Sun Life Medium Growth Direct Plan ",
    "category": "Equity",
    "one_year_return": 95.623,
    "three_year_return": 23.437,
    "nav": 19.65
  },
  {
    "key":"4",
    "name": "Nippon India Credit Bonus Bonus Growth Plan",
    "category": "Debt",
    "one_year_return": 18.623,
    "three_year_return": 29.437,
    "nav": 34.51
  },
  {
    "key":"5",
    "name": "ICICI Prudential Bharat 22 FoF Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 94.623,
    "three_year_return": 66.437,
    "nav": 7.43
  },
  {
    "key":"6",
    "name": "Canara Robeco Infrastructure Growth Direct Plan",
    "category": "Equity",
    "one_year_return": 28.623,
    "three_year_return": 123.437,
    "nav": 33.03
  },
  {
    "key":"7",
    "name": "Sundaram Rural & Conumption Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 110.623,
    "three_year_return": 19.437,
    "nav": 48.98
  },
  {
    "key":"8",
    "name": "Mahindra Manulife Rural Bharat & Consumption Growth Plan",
    "category": "Debt",
    "one_year_return": 8.623,
    "three_year_return": 54.437,
    "nav": 43.54
  },
  {
    "key":"9",
    "name": "SBI Retirement Benefit Aggressive Growth Direct Plan",
    "category": "Equity",
    "one_year_return": 14.623,
    "three_year_return": 26.437,
    "nav": 21.03
  },
  {
    "key":"10",
    "name": "Quant Large and Mid Cap Bonus Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 19.623,
    "three_year_return": 29.437,
    "nav": 58.35
  },
  {
    "key":"11",
    "name": "Kotak Emerging Equity Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 32.623,
    "three_year_return": 61.437,
    "nav": 28.91
  },
  {
    "key":"12",
    "name": "Edelweiss Aggressive Hybrid Growth Direct Plan",
    "category": "Equity",
    "one_year_return": 82.623,
    "three_year_return": 39.437,
    "nav": 10.53
  },
];

const ChangeTitle=()=> {
  useEffect(() => {
    document.title = 'Explore Mutual Funds';
  });
}


const Explore = () => {
ChangeTitle();
const[searchField,setSearchField] = useState('');
const[mutualFundsList,setMutualFundsList] = useState(List);
const[filteredMutualFundsList, setFilteredMutualFundsList] = useState(mutualFundsList);
const[filterField,setFilterField] = useState('');

  
const onSearchChange= (event) =>{
  const searchFieldString = event.target.value.toLowerCase()
  setSearchField(searchFieldString);
}


useEffect(()=>{
  const newFilteredMutualFundList = mutualFundsList.filter((mutualFund)=>{
    return mutualFund.name.toLowerCase().includes(searchField);
  })
  setFilteredMutualFundsList(newFilteredMutualFundList);
},[mutualFundsList,searchField] );

const onFilterChange = (event) =>{
  const filterFieldString = event.target.value;
  setFilterField(filterFieldString);
}

useEffect(()=>{
  const newFilteredMutualFundList = mutualFundsList.filter((mutualFund)=>{
    return mutualFund.category.includes(filterField);
  })
  setFilteredMutualFundsList(newFilteredMutualFundList);
},[filterField,setFilterField]);

return (
    <div className="App">
      <SearchBox onChangeHandler={onSearchChange}/>
      <div className='table-mutual-funds'>
        <FilterCategory onFilterChangeHandler={onFilterChange}/>
      <Home mutualFunds={filteredMutualFundsList}/>
      </div>
    </div>
  );


}

export default Explore;