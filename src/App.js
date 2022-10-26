import Explore from './routes/explore.component';
import About from './components/about/about.component';
import Login from './components/login/login.component';
import { Routes, Route } from 'react-router';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import MutualFundDetail from './components/mutual-fund-detail-components/mutual-fund-detail/mutual-fund-detail.component';
import Footer from './components/footer/footer.component';





const App = () =>{

  return (
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index='true' element={<Explore />}/>
        <Route path='home' element={<Explore/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/mutual-fund-detail/:key' element={<MutualFundDetail/>}/>
      </Route>

    </Routes>
  )
}

export default App;
