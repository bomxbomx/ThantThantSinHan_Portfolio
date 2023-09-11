import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './assets/components/Layout';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Contact from './assets/components/Contact';
import Work from './assets/components/Work';



function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>} /> 
            <Route path='work' element={<Work/>} />
            <Route path='contact' element={<Contact/>} />  
          </Route>
        </Routes>
      </> 
    </div>
  );
}

export default App;
