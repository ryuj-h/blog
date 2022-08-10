import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','강남 물난리']);
  //state를 사용하면 데이터가 변경되는 순간에 재 렌더링이 되어서 사용함.
  return (
    <div className="App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{글제목[0]}</h3>
        <p>8월 10일 발행</p>
        <hr/>
        <h3>{글제목[1]}</h3>
        <p>8월 11일 발행</p>
        <hr/>
        <h3>{글제목[2]}</h3>
        <p>8월 12일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
