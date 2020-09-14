import React from 'react'

class MessageItem extends React.Component {

    render(){
        return (
            <div>
                <p> { this.props.body } - { this.props.createdAt.toString() }  </p> 
            </div>
        )
    }
}

export default MessageItem