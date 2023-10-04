import { func } from "prop-types";


export default function Message(props) {

    return (
        <div key={props.item.subject} className="form">
            <h1 className="form-title">{props.item.msg_subject}</h1 ><br />
            <h4 className="msg">{props.item.message}</h4>
            <div className="btns">
                <button className="btn" onClick={() => props.reply(props.item)}>reply</button>
                <button className="btn" onClick={() => props.cancel(props.item)}>delete</button>
            </div>
        </div>
    )
}