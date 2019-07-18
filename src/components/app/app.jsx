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
    render(){
        const {comments} = this.state
        return (

            <div>
                <div className="container">
                    <h1 className="title">请发表对React的评论</h1>
                    <div className="flex">
                        <div className="content">
                            <CommentAdd/>
                        </div>
                        <div className="content">
                            <CommentList comments={comments} />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
