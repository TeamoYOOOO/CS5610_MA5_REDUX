import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { shallowEqual, useSelector } from 'react-redux';
import './Box.css';


function Box(){

    let className = "box";
    let diff = 0;
    const [clickState, setClickState] = useState(false);

    if(clickState){
        className = "box black";
    }

    const dispatch = useDispatch();
    
    function clickBox(){
        if(!clickState){
            setClickState(true);
            diff = 1;
        }else{
            setClickState(false);
            diff = -1;
        }
        dispatch({
            type: 'CLICK',
            value: diff,
        });
    }
    
    return (
        <div class={className} onClick={() => clickBox()}>
            </div>
    )
}    

export default Box;