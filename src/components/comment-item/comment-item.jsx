import React,{Component} from 'react'
import propTyps ,{PropTyps} from 'prop-types'

export default class CommentItem extends Component{
    constructor(props){
        super(props)
    }
    static propTyps = {
        //index:PropTyps.number.isRequired
    }
    delect = ()=>{
        const {index} = this.props
        this.props.delData(index)
    }
    render(){
        const {comment} = this.props
        return(
            <div>
                <div className="group">
                    <p>{comment.userName}说：</p>
                    <p>{comment.content}</p>
                    <button onClick={this.delect}>删除</button>
                </div>
            </div>
        )
    }
}
