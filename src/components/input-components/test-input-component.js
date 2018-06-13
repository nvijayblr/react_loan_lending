import React from 'react';

export default function(props) {
    console.log(props);
    return (
        <div>
            <div>
                {props.title}
            </div>
            <div>
                <input type="text" name="{props.id}" />
            </div>
        </div>
    );
}