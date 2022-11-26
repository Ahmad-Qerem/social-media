import styles from './App.module.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as AllPages from './View/AllPages'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    
      <Router>
        <div className={styles.AppWrapper}>
          <NavBar/>
          <div className={styles.Content}>
          <Routes >
            <Route exact path="/" element={<AllPages.HomePage/>}></Route>
            <Route exact path="/About" element={<AllPages.About />}></Route>
            <Route exact path="/QPage" element={<AllPages.QPage />}></Route>
          </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    
  );
}

export default App;
