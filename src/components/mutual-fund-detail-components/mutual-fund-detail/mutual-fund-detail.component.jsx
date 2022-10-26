import React, {Components,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ReturnCalculator from '../return-calculator/return-calculator.component';
// import LineChart from '../chart/chart-component';

const MutualFundDetail = () =>{
   const {code} = useParams();
   const mutualFundCode = {code}; 

  const[mutualFundObject,setMutualFundObject] = useState({});
  const[returns,setReturns] = useState({});

  useEffect(()=>{
    fetch(`https://api.kuvera.in/mf/api/v5/fund_schemes/${mutualFundCode.code}.json?v=1.207.3`)
        .then((response) => response.json())
        .then((users) => {
          const mf = users.find((fund)=>{
           return fund.code === mutualFundCode.code;
           })
           setMutualFundObject(mf);
           setReturns(mf.returns);
          })
 
  }, []);

   return(
       <div>
             <h1>Fund name is : {mutualFundObject.name}</h1>
             <br/>
            <ReturnCalculator requiredMutualFund={returns}/>
       </div>
   )
}

export default MutualFundDetail;