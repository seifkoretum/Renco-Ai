import React from "react";

function Button(props) {
    return (
        <div>
            <button type="button" class="btn btn-outline-primary">{props.name}</button>
        </div>
    )
}

export default Button;