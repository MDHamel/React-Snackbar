import "./Snackbar.css";
import hamburger from "./images/hamburger.png";
import { useState, useEffect } from "react";


export default function SnackBar(props){
    const toggleCompress = () => {if (props.compress==="compress"){props.setCompress("expand")}else{props.setCompress("compress")}};

    return(
        <div className={"bar " + props.compress}>
            <img className={"hamburger " + props.compress} src={hamburger} onClick={()=>{toggleCompress()}}/>
            
            <div className={"buffet " + props.compress} {...props}>
                <Snack onClick={()=>props.setContent("home")}>Home</Snack>
                <Candyjar title="Candy Jar" {...props}>
                    <li onClick={()=>props.setContent("hamburger")}>hamburger</li>
                    <li onClick={()=>props.setContent("hotdog")}>hotdog</li>
                    <li onClick={()=>props.setContent("fries")}>fries</li>
                </Candyjar>
                <Candyjar title="Another Candy Jar" {...props}>
                    <li onClick={()=>props.setContent("icecream")}>ice cream</li>
                    <li onClick={()=>props.setContent("ramen")}>ramen</li>
                </Candyjar>
            </div>
        </div>
    )
}


function Candyjar(props){
    const [state, setState] = useState("squish")

    const toggleState = () => {
        if (state==="squish"){
            setState("inflate");
        }
        else{
            setState("squish");
        }
    }

    useEffect(()=>
        {
            if(props.compress == "compress"){
                setState("squish")
            }
        });

    return(
        <div className="snack">
            <b onClick={toggleState} className="clickable">{props.title}</b>
            <ul className={"candy clickable " + state } style={{textDecoration: "bold"}}>
                {props.children}
            </ul>
        </div>
)
}

function Snack(props){
    return(
        <div className="snack clickable">
            <b onClick={props.onClick}>{props.children}</b>
        </div>
        
    )
}