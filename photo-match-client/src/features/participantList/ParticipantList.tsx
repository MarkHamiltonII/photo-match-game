import { useEffect, useState } from "react";
import { Badge } from "../../components";
import type { Participant } from "../../types";
import "./participantList.css";

export function ParticipantList({ participantList }: Props) {
    const [animateKey, setAnimateKey] = useState(0);
    useEffect(() => {
        setAnimateKey(prev => prev + 1)
    }, participantList)

    return <div key={animateKey} className="participant-list">
        {participantList.map(participant => (<Badge text={participant.name} shouldAnimate shouldRotate />))}
    </div>;

}

type Props = {
    participantList: Participant[]
}