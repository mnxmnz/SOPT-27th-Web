import "./Card.scss";
import { DeleteOutlined, FileImageOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { removeMember } from "../../lib/api/memberAPI";

function Card({ history, match, memberData, onRemoveCard }) {
    const onClickRemove = async (evt) => {
        evt.stopPropagation();
        try {
            await removeMember(memberData.id);
            onRemoveCard(memberData.id);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="card" draggable onClick={() => history.push(`${match.path}/${memberData.id}`)}>
            <div className="remove-button" onClick={onClickRemove}>
                <DeleteOutlined style={{ fontSize: "16px" }} />
            </div>
            <div className="image-area">{memberData.profileUrl !== "" ? <img src={memberData.profileUrl} alt="profile"></img> : <FileImageOutlined style={{ fontSize: "40px" }} />}</div>
            <div className="card__content card__text name">{memberData.name}</div>
            <div className="card__content card__text instagram">{memberData.instagram}</div>
            <div className="card__content card__text introduction">{memberData.introduction}</div>
            <div className="card__content card__text mbti">{memberData.mbti}</div>
        </div>
    );
}

export default withRouter(Card);
