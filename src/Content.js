import "./Content.css"

import hamburg from "./images/hamburgerFood.jpg"
import house from "./images/house.jpg"
import icecream from "./images/ice cream.jpg"
import fries from "./images/fries.jpg"
import ramen from "./images/Ramen.jpg"
import hotdog from "./images/hotdog.jpg"

const contentToLoad = {
    "hamburger": <Hamburger />,
    "home" : <House />,
    "hotdog" : <Hotdog />,
    "fries" : <Fries />,
    "icecream" : <IceCream />,
    "ramen" : <Ramen />
}

export default function Content(props){
    return(
        <div className="content">
            {contentToLoad[props.load]}
        </div>
    )
}

export function Hamburger(){
    return(<img src={hamburg}/>)
}

export function House(){
    return(<img src={house}/>)
}

export function Fries(){
    return(<img src={fries}/>)
}

export function Ramen(){
    return(<img src={ramen}/>)
}

export function Hotdog(){
    return(<img src={hotdog}/>)
}

export function IceCream(){
    return(<img src={icecream}/>)
}
