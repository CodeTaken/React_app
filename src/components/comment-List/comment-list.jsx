import React,{Component} from 'react'
import propTypes, {PropTypes} from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './comment-list.css'

export default class CommentList extends Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    static propTypes = {
        comments:PropTypes.array.isRequired
    }
    render(){
        const {comments} = this.props
        return(
            <div>
                <h3>评论列表</h3>
                {
                    comments.map((comment,i)=><CommentItem comment={comment} key={i} index={i} />)
                }
            </div>
        )
    }
}
