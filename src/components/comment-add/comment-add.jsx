import React,{Component} from 'react'
import propTypes, {PropTypes} from 'prop-types'

import './comment-add.css'

export default class CommentList extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
    }
    state={
        userName:'',
        content:'',
    }
    static propTypes = {
        addComments:PropTypes.func.isRequired
    }
    handleAdd = () =>{
        const comment = this.state
        if(!comment.userName && !comment.content) return
        this.props.addComments(comment)
        this.setState({
            userName:'',
            content:'',
        })
    }
    handleUserOne =(e)=>{
        let {userName} = this.state;
        userName = e.target.value;
        this.setState({
            userName
        })
    }
    handleUserTwo =(e) =>{
        let {content} = this.state;
        content = e.target.value;
        this.setState({
            content
        })
    }
    render(){
        return (
            <div>
                <input className="inputBasic" value={this.state.userName} onChange={this.handleUserOne} placeholder="姓名" type="text"/>
                <textarea className="texterea"  value={this.state.content} onChange={this.handleUserTwo} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={this.handleAdd}>add</button>
            </div>
        )
    }
}