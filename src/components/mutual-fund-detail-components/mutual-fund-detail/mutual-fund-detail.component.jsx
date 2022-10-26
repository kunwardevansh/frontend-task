import React, {Components,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ReturnCalculator from '../return-calculator/return-calculator.component';
// import LineChart from '../chart/chart-component';
import axios from 'axios';

const MutualFundDetailList = [
  {
    "key":"1",
    "name": "Bank Of India Credit Risk Growth Direct Plan",
    "category": "Debt",
    "one_year_return": 11.623,
    "three_year_return": 14.437,
    "nav": 10.58,
    "ApiData" : "BACSDG-GR",
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






const MutualFundDetail = () =>{
   const {key} = useParams();
   const paramsKey = {key};

  const[mutualFundDataAxios, setMutualFundDataAxios] = useState([]);
  const[apiname,setApiname] = useState('');

  // const fetchingData = () =>{
  //   axios.get(`https://https://jsonplaceholder.typicode.com/users/1`)
  //   .then((response) =>{
  //     const ApiData = response.name;
  //     setApiname(ApiData);
  //   })
  // }




  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users/${paramsKey.key}`)
  //       .then((response) => response.json())
  //       .then((users) => setApiname(users.name));
  // }, []);

useEffect( ()=>{
  axios.get(`https://https://jsonplaceholder.typicode.com/users/1`)
  .then(response => { setApiname(response.name)});
},[]);



  // React.useEffect(() => {
  //   axios.get('https://api.kuvera.in/mf/api/v5/fund_schemes/BACSDG-GR.json?v=1.207.3')
  //   .then((response) => {
  //     setApiname(response.name);
  //   });
  // }, [apiname,setApiname]);


  // useEffect(()=>{
  //   const fetchingData = () =>{
  //     axios.get(`https://api.kuvera.in/mf/api/v5/fund_schemes/BACSDG-GR.json?v=1.207.3`)
  //     .then((response) =>{
  //       const ApiData = response.name;
  //       setApiname(ApiData);
  //     })
  //   }
  // },[apiname,setApiname]);

  
   const mutualFund = MutualFundDetailList.find((Fund) =>{
    
      return Fund.key === paramsKey.key;
    })
    
   return(
       <div>
           <h1>Key is : {key}</h1>
           <div>
             <h1>Fund name is {apiname}</h1>
            <ReturnCalculator requiredMutualFund={mutualFund}/>
           </div>
       </div>
   )
}

export default MutualFundDetail;