import React from "react";

class ClassHeader extends React.Component{
    constructor(props){
        super(props);
        console.log(this);
    }

    render(){
        return <h1>{[this.props.name, this.props.age, this.props.YearOfBirth]  }</h1> 
    
    };
}
export default ClassHeader;