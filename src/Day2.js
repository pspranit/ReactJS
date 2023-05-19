import React,{Component} from 'react'

export default class Day2 extends Component{

    render(){
        return(
            <div>
                <h1>my name is {this.props.name} and my company is {this.props.company}</h1>
            </div>
        )
    }
}