import React from "react";


export default props => 

    <div
        className={props.todo.complete ? "completed" : "todo"}
        onClick={props.toggleComplete}
     >
        {props.todo.text}
     </div>
