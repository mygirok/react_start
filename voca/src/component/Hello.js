/*const Hello = function(){
    <p>Hello</p>
}

const Hello = () => {
    <p>hello</p>
}

export default Hello;*/

import World from "./World";

export default function Hello(){
    return (
        <div>
            <h2>Hello</h2>
            <World />
            <World />
        </div>
    )
} 
