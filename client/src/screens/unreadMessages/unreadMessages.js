import { useEffect, useState } from "react"
import message from '../../actions/messageAction'
import Message from "../../component/message/message";
import Reply from "../../component/reply/reply";
import './unread.css'

export default function UnreadMessages() {
    const [messages, setMessages] = useState([]);
    const [replyDetails, setReplyDetails] = useState([]);
    const [showReply, setShowReply] = useState(false);

    const getMsg = async () => {
        const data = await message.getUnreadMessage()
        await setMessages(data)
        debugger
    }

    const reply = async (details) => {
        setReplyDetails(details);
        setShowReply(true);
    }

    const repleyed = async (details) => {
        setShowReply(false)
        const change = [...messages];
        const removeId = change.findIndex(item => item.msg_id === details.msg_id);
        change.splice(removeId, 1);
        setMessages(change)
    }

    const cancel = async (details) => {
        const change = [...messages];
        message.deleteMessage(details);
        const removeId = change.findIndex(item => item.msg_id === details.msg_id);
        change.splice(removeId, 1);
        setMessages(change)
    }


    useEffect(() => {
        getMsg();

    }, [])

    return (
        <div>
            {showReply && <Reply replyed={repleyed} details={replyDetails} />}
            {messages[0] &&
                messages.map(item =>

                    <Message item={item} reply={reply} cancel={cancel} />
                )
            }
        </div>
    )
}

