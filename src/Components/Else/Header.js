import React, {useState} from "react";
import {Button} from 'react-bootstrap'

const Header = () => {  

    const [color, setColor] = useState("Green")
    const changeColor = () => {
        setColor("Yellow")
    }

    const [count, setCount] = useState(0)
    const incCount = () => {
        setCount(count +1)
    }
    const decCount = () => {
        if(count>0){   
        setCount(count - 1 )
        }else{
        setCount(0)   
        }
    }
    return(
        <>
        <h1 className="bg-warning text-white">useState Hook in React</h1><br/>
        <h1>My favourite color is {color}</h1>    
        <Button className="btn-success mb-4" onClick={changeColor}>Change Color</Button>

        <h1>Count is {count}</h1>
        <Button onClick={incCount} className="m-2 btn-success">+</Button>
        <Button onClick={decCount} className="btn-danger">-</Button>
        </>
    )
};

export default Header;


