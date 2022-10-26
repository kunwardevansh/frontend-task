// import logo from './logo.svg';
import React,{useState,Components,useEffect} from 'react';
// import './App.css';
import './explore.styles.css'
import Home from '../components/home/home.component';
import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import FilterCategory from '../components/filters/filter-category.component';


const ChangeTitle=()=> {
  useEffect(() => {
    document.title = 'Explore Mutual Funds';
  });
}


const Explore = () => {
ChangeTitle();
const[searchField,setSearchField] = useState('');
const[mutualFundsList,setMutualFundsList] = useState([]);
const[filteredMutualFundsList, setFilteredMutualFundsList] = useState(mutualFundsList);
const[filterField,setFilterField] = useState('');

useEffect(() => {
  fetch(`https://api.kuvera.in/insight/api/v1/mutual_fund_search.json?&limit=30&sort_by=one_year_return&order_by=desc&scheme_plan=GROWTH&v=1.207.3`)
      .then((response) => response.json())
      .then((fund) => setMutualFundsList(fund.data.funds))
}, []);

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
  const newFilteredMutualFundList2 = mutualFundsList.filter((mutualFund)=>{
    return mutualFund.category.includes(filterField);
  })
  setFilteredMutualFundsList(newFilteredMutualFundList2);
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