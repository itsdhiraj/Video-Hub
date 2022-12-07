import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import {Button} from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Video from './components/Video';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>

      <Header/>
<Routes>
  <Route path='/'element={<Home/>} />
  <Route path='/videos'element={<Video/>} />
  <Route path='/upload'element={<Upload/>} />
  <Route path='/signup'element={<Signup/>} />
  <Route path='/login'element={<Login/>} />
</Routes>
<Footer/>

    </Router>
    
  );
}

export default App;
