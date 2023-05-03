import './css/my_reset.css';
import './css/App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import MainList from './pages/MainList';
import Self from './pages/Self';
import CartDetail from './pages/CartDetail';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          'https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=giJyfRwzdk3MkJpjS%2BeZ4DvcsfA7ztQcgNrT%2Fq5NVOVjMh%2BpF1jrG7RtnYZSQq7fVd9TpzcVbUKIKToJ0SvMcw%3D%3D&pageNo=1&numOfRows=1000'
        );
        const response2 = await axios.get(
          'https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=giJyfRwzdk3MkJpjS%2BeZ4DvcsfA7ztQcgNrT%2Fq5NVOVjMh%2BpF1jrG7RtnYZSQq7fVd9TpzcVbUKIKToJ0SvMcw%3D%3D&pageNo=1&numOfRows=1000'
        );
        const response3 = await axios.get(
          'https://apis.data.go.kr/6300000/openapi2022/shppg/getshppg?serviceKey=giJyfRwzdk3MkJpjS%2BeZ4DvcsfA7ztQcgNrT%2Fq5NVOVjMh%2BpF1jrG7RtnYZSQq7fVd9TpzcVbUKIKToJ0SvMcw%3D%3D&pageNo=1&numOfRows=1000'
        );
        const response4 = await axios.get(
          'https://apis.data.go.kr/6300000/openapi2022/tourroms/gettourroms?serviceKey=giJyfRwzdk3MkJpjS%2BeZ4DvcsfA7ztQcgNrT%2Fq5NVOVjMh%2BpF1jrG7RtnYZSQq7fVd9TpzcVbUKIKToJ0SvMcw%3D%3D&pageNo=1&numOfRows=1000'
        );
        const mergeData = response1.data.response.body.items.concat(
          response2.data.response.body.items,
          response3.data.response.body.items,
          response4.data.response.body.items
        );
        localStorage.setItem('data', JSON.stringify(mergeData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  let subName = useLocation().pathname;

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/mainList"
          element={<MainList subName={subName} />}
        ></Route>
        <Route path="/self" element={<Self subName={subName} />}></Route>
        <Route path="/cartDetail" element={<CartDetail />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
