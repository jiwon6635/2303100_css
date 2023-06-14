// index.js

import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from 'recoil'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);


// DongSupAtom.jsx
// key값이랑 변수명 동일하게 해야힘

export const myNewAtom = atom({
    key: 'myNewAtom',
    // 초기값
    default: '',
  });

// const [value, setValue] = useState('');

// Dongsup.jsx
import {useRecoilState, useRecoilValue, sueSetRecoilState } from "recoil";
import { myDongsupAtom } from "../recoil/DongSupAtom";

const [value, setValue] = useState('');
const [value, setValue] = useRecoilState(myDongsubAtom);

setValue('변화시킬 값')
{value}


import { useState } from 'react'
import { useRecoilState } from 'recoil'

export default function Jieun() {

  function 함수() {
    recoil ...
  }

  return (
    <form onSubmit={함수}>
      <input type="text" onChange={} value={}/>
      <button type="submㅍit"></button>
    </form>
  )
}


import { useState } from 'react'
import { useRecoilState } from 'recoil'
import {myAtom} from ".recoil/AllAtom";

export default function Jiwon() { 

  const [value, setValue] = useState('')

  const jiwon = (event) => {
      setValue(event.target.value)
  }
  const [inputValue, setInputValue] = useRecoilState(myAtom) 
  in
  const jiwonn = () => {
      setInputValue(value)
  } 

  return (
    <form onSubmit={jiwonn}>
      <input type="text" onChange={event=>setValue(event.target.value)} value={value}/>
      <button type="submit"></button>
    </form>
  )
}

// Jiwon.jsx
/////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import {myAtom} from ".recoil/AllAtom";
import { useSetRecoilState } from 'recoil';

export default function Jiwon() { 

  const [value, setValue] = useState('')

  const jiwon = (event) => {
      setValue(event.target.value)
  } 
  const setInputValue = useSetRecoilState(myAtom) 

  // const jiwonn = () => {
  //    setInputValue(value)
  // } 
  // 함수를 이벤트 핸들러로 전달

  function handleSubmit() {
    SetInputValue(value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event=>setValue(event.target.value)} value={value}/>
      <button type="submit"></button>
    </form>
  )
}

// export default function Jieun() {
//  const [num, setNum] = useState('') 
//  //useState 훅을 사용해서 num이라는 state 변수와 setNum이라는 함수를 만듦.
//  const [je, setJe] = useRecoilState(jeAtom)

//  function handleSubmit() { //handleSubmit 함수를 만들어서 setJe 함수를 호출하고 num값을 전달함.
//    setJe(num)
//  }

  return (
    <form onSubmit={handleSubmit}> 
    // onSubmit에 handleSubmit
      <input type="text" onChange={event=>{setNum(event.target.value)}} value={num}/>
      //input 요소에 on Change 이벤트 핸들러를 연결하여 입력값을 num state 변수에 저장함.
      //input 요소에 value 속성을 num state 변수로 설정하여 화면에 현재 입력값을 표시함.
       (input text에 이벤트 발생하게하고, setNum객체 안에 value값을 타겟으로 지정함. value 값을 num으로 받아옴.)
      <button type="submit"></button>
    </form>
  )
}





//    AllAtom.jsx 
// import { atom } from 'recoil';

// const myNewAtom = atom({
//   key: 'myNewAtom',
//   default: value,
// });

import { atom } from 'recoil';

export const myDongSupAtom = atom({
  key: 'myDongSupAtom',
  default: 'value',
});


export const myAtom = atom({
    key: 'myAtom',
    default: '',
}); 

export const wyAtom = atom({
  key: 'wyAtom', 
  default: '기본값'
})

export const jeAtom = atom({
  key: 'jeAtom', 
  default: ''
})


//   App.js

import Wonyeong from "./test/Wonyeong";

function App() {
  return (
    <div>
      hello world
      <Wonyeong />
    </div>
  );
}
export default App;


// index.js
import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { RecoilRoot } from 'recoil'

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
