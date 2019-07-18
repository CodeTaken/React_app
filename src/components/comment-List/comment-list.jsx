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
        comments:PropTypes.array.isRequired,
        delData:PropTypes.func.isRequired
    }
    render(){
        const {comments,delData} = this.props
        if(comments.length>0){
            return(
                <div>
                    <h3>评论列表</h3>
                    {
                         comments.map((comment,i)=><CommentItem delData={delData} comment={comment} key={i} index={i} />)
                    }
                </div>
            )
        }else{
            return(
                <h3>暂无评论</h3>
                )

        }
    }
}
