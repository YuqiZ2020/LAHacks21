import React from 'react';
import "./Forum.css"
import ForumMap from '../../Components/forum/forumMap'
import data from '../../Components/forum/forumDummy.js'
import SubmitButton from '../../Components/submitForumStory/submitButton'

export default class Forum extends React.Component {
    render() {
        console.log(data)
        return (
            <div className="forum">
                <div className='stories'>
                    <ForumMap data = {data}/>
                </div>
            
                <div>
                    <SubmitButton/>
                </div>
            </div>
            
        )
    }
}