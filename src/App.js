import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>

      <div className="app-container">

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>

        <Footer />

      </div>
      
    </Router>
  );
}

export default App;
