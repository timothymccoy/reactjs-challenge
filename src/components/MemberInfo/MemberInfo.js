import React from 'react';
import './MemberInfo.css'

const MemberInfo = (props)=>{
    return(
        <div className="MemberInfo">
            <p>{props.name}</p>
            <a href={props.link}>View on Github</a>
        </div>
    );
}

export default MemberInfo;