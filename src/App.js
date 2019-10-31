import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";
import {useLocalStorage} from "./hooks/useLocalStorage";

function App() {
  const [strike, setStrike] = useLocalStorage(1, 0);
  const [balls, setBalls] = useLocalStorage(2, 0);
  const [outs, setOuts] = useLocalStorage(3, 0);
  const [inning, setInning] = useLocalStorage(4, 1);
  const [base, setBase] = useLocalStorage(5, 0);
  const [score, setScore] = useLocalStorage(6, 0);

  const StrikeUp = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    }else if (outs < 2) {
      setOuts(outs + 1);
      setStrike(0);
      setBalls(0);
    } else {
      setInning(inning + 1);
      setStrike(0);
      setBalls(0);
      setOuts(0)
    }
  };

  const BallsUp = () => {
    if (balls < 3) {
      setBalls(balls + 1);
    } else if (base < 3) {
      setBase(base + 1);
      setStrike(0);
      setBalls(0);
    } else {
      setScore(score + 1);
      setStrike(0);
      setBalls(0);
      setBase(0);
    }
  };

  const RandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  const Hit = () => {

    let RandomNumber = RandomNum(0, 100);
    console.log(RandomNumber);
    if (base < 3 && 50 < RandomNumber < 100) {
      setBase(base + 1);
      setStrike(0);
      setBalls(0);
    } else if (base < 3 && 0 < RandomNumber < 50) {
      setBase(base + 2);
      setStrike(0);
      setBalls(0);
    } else {
      setScore(score + 1);
      setBase(0);
    }
  }


  const Foul = () => {
    if (strike < 2) {
      setStrike(strike + 1);
    }
  };


  return (
    <div className="App">
      <Display strike={strike} balls={balls} score={score} base={base} outs={outs} inning={inning}/>
      <Dashboard StrikeUp={StrikeUp} BallsUp={BallsUp} Hit={Hit} Foul={Foul}/>
    </div>
  )
};

export default App;
