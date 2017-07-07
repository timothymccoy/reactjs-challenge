import React, {Component} from 'react';
import MembersListItem from '../MembersListItem/MembersListItem';
import members from '../../api/membersApi'
import './MembersList.css';

class MembersList extends Component{
    constructor(props){
        super(props);
        this.state = {
            members: []
        };
    }

    componentDidMount(){
        members.fetchMembers().then((data) => {
            //limit results to 10 items
            let limited = data.slice(0,10);
            this.setState({
                members: limited
            });
        });
    }

    renderMembers(){
        return this.state.members.map((member, index)=>(
            <MembersListItem key={index} member={member}/>
        ));
    }

    render() {
        return(
            <ul className="MembersList">
                {this.renderMembers()}
            </ul>
        );
    }
}

export default MembersList;