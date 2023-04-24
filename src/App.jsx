import './css/my_reset.css';
import './css/App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import MainList from './pages/MainList';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/mainList" element={<MainList />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
