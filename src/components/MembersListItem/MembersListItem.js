import React, {Component} from 'react';//import React from NPM react module
import Avitar from '../Avitar/Avitar'
import MemberInfo from '../MemberInfo/MemberInfo'
import './MembersListItem.css';

class MemberListItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { member } = this.props;
        return(
            <li className="MembersListItem">
                <div>
                    <Avitar source={member.avatar_url}/>
                    <MemberInfo name={member.name} link={member.html_url}/>
                </div>
            </li>
        )
    }
}

export default MemberListItem;

