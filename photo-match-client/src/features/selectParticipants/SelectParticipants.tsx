import { Checkbox } from "../../components";
import type { Participant } from "../../types";
import { NewParticipant } from "./newParticipant";
import "./selectParticipants.css";

export function SelectParticipants(props: Props) {
    const { participants, onChange } = props;

    return (
        <div className="participant-toggle-container">
            <div className="participant-toggle-list">
                {participants.map(participant => (
                    <Checkbox
                        value={participant.name}
                        label={participant.name}
                        checked={participant.selected}
                        onClick={(checked) => {
                            const updatedParticipantList = [...participants.map(p => p === participant ? { ...p, selected: checked } : p)];
                            onChange(updatedParticipantList);
                        }}
                    />
                ))}
            </div>
            <NewParticipant onSubmit={(newParticipant) => onChange([newParticipant, ...participants])} />
        </div>
    )

}

type Props = {
    participants: Participant[];
    onChange: (participants: Participant[]) => void;
}