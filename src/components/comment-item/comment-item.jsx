import React,{Component} from 'react'
import propTyps ,{PropTyps} from 'prop-types'

export default class CommentItem extends Component{
    constructor(props){
        super(props)
    }
    static propTyps = {
        //comment:PropTyps.object.isRequired
    }
    render(){
        const {comment} = this.props
        return(
            <div>
                <div className="group">
                    <p>{comment.userName}说：</p>
                    <p>{comment.content}</p>
                    <button>删除</button>
                </div>
            </div>
        )
    }
}
