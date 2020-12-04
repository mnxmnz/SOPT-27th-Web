import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import { getMembers, createMember } from "../../lib/api/memberAPI";
import "./MemberList.scss";

function MemberList({ history, match }) {
    const [membersState, setMembersState] = useState({
        members: null,
        status: "idle",
    });

    useEffect(() => {
        setMembersState({ members: null, status: "pending" });
        try {
            (async () => {
                const result = await getMembers();
                setTimeout(() => setMembersState({ members: result, status: "resolved" }), 800);
            })();
        } catch (e) {
            setMembersState({ members: null, status: "rejected" });
        }
    }, []);

    const onCreateCard = async () => {
        const object = {
            name: "",
            profileUrl: "",
            instagram: "",
            introduction: "",
            mbti: "",
        };
        try {
            const result = await createMember(object);
            setMembersState({
                members: [...membersState.members, result],
                status: "resolved",
            });
        } catch (e) {
            setMembersState({ members: membersState.members, status: "rejected" });
        }
    };

    const removeCard = (id) => {
        setMembersState({
            members: membersState.members.filter((mem) => mem.id !== id),
            status: "resolved",
        });
    };

    switch (membersState.status) {
        case "pending":
            return <Loading />;
        case "rejected":
            return <div>데이터 로딩 실패</div>;
        case "resolved":
            return (
                <div className="member-list">
                    <div className="member-list__title">파트원 소개</div>
                    <div className="member-list__header member-list-header">
                        <div className="member-list-header__nav">Gallery View</div>
                        <div className="member-list-header__empty"></div>
                        <Button text="Properties" textColor="#777"></Button>
                        <Button text="Filter" textColor="#777"></Button>
                        <Button text="Sort" textColor="#777"></Button>
                        <Button text="Search" textColor="#777" icon="search"></Button>
                        <Button text="..." textColor="#777"></Button>
                    </div>
                    <hr />
                    <div className="member-list-content-wrapper">
                        {membersState.members.map((member, i) => (
                            <Card key={"card-" + i} memberData={member} onRemoveCard={removeCard} />
                        ))}
                        <div className="create-card" onClick={onCreateCard}>
                            + New
                        </div>
                    </div>
                </div>
            );
        case "idle":
        default:
            return <div></div>;
    }
}

export default MemberList;
