import React,{useEffect} from 'react';


const ChangeTitle=()=> {
    useEffect(() => {
      document.title = 'About Kuvera';
    });
  }

const About = () =>{
    ChangeTitle();
    return(
        <div className='center-it'>
            <h1>this single page application was created to demonstrate kunwar's QUICK learning in reactjs</h1>
        </div>
    )
}

export default About;