import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Fragment } from 'react';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </Fragment>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
