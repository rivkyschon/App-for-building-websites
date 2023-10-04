export default function WebsiteMsg(props) {
    return (
        <div>
            your website was successfully saved!!!
            <a href={`http://localhost:3000/${props.link}`} target="_blank" rel="noopener noreferrer">
                your website here
            </a>
        </div>
    )
}