import React from "react";
import {Launcher} from 'react-chat-window'
import io from 'socket.io-client';

class ChatBotRobot extends React.Component {
    constructor(props){
        super (props);


    this.state={
        messageList:[],
        
    }

    }
    
    async _onMessageWasSent(message) {
        await this.setState ({
            messageList: [...this.state.messageList,
            message]
        })
    }

    _sendMessage (text) {
        if (text.length > 0) {
            this.setState ({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: {text}

                },]
            })
        }
    }
    render () {
        return (
            <div id="chatbox" className="chatbox">
                <Launcher
                agentProfile={{
                    teamName: 'Group C',
                    imageUrl:'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent=
                {this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
                />
            </div>
        );
    }
}

export default ChatBotRobot;
