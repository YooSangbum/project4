import './css/my_reset.css';
import './css/App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './pages/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
