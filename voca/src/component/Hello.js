/*const Hello = function(){
    <p>Hello</p>
}

const Hello = () => {
    <p>hello</p>
}

export default Hello;*/

import World from "./World";
import styles from "./Hello.module.css";

export default function Hello(){
    return (
        <div>
            <h1 style={{
                    color : "#f00",
                    borderRight : "12px solid #000",
                    marginBottom : "50px",
                    opactiy : 1,
                }}
            >
                Hello
            </h1>
            <div className={styles.box}>Hello</div>
        </div>
    )
} 
