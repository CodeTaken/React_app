import React ,{Component} from 'react'

import  CommentAdd from '../comment-add/comment-add'
import  CommentList from '../comment-List/comment-list'



import './app.css'
export default class App extends Component{
    state={
        comments:[
            {userName:'李白',content:'确实非常好用'},
            {userName:'蒋大卫',content:'这是一个很好用的东西，值得推荐'}
        ]
    }
    addComments =(comment)=>{
        console.log(comment);
        const { comments} = this.state
        comments.unshift(comment)
        this.setState({ comments })
    }
    delData = (index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        this.setState({ comments })
    }
    render(){
        const {comments} = this.state
        return (

            <div>
                <div className="container">
                    <h1 className="title">请发表对React的评论</h1>
                    <div className="flex">
                        <div className="content">
                            <CommentAdd addComments={this.addComments}/>
                        </div>
                        <div className="content">
                            <CommentList comments={comments} delData={this.delData}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
