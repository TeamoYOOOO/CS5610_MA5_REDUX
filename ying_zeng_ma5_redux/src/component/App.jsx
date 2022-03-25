import './App.css';
import { shallowEqual, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from './Box';


export default function App(){
  // const [diff, setDiff] = useState(0);

  const currentCount = useSelector((state) => {
      return state;
  }, shallowEqual);
  
  return(
    <div>
      <h1>Count: {currentCount}</h1>
      <div class="container">
        <Box />
        <Box />
        </div>
      <div class="container">
        <Box />
        <Box />
        </div>
    </div>
  )
}
