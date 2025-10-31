import { useState } from "react";
import type { Participant } from "../../../types";
import "./newParticipant.css"

export function NewParticipant({ onSubmit }: { onSubmit: (participant: Participant) => void }) {
    const [newParticipant, setNewParticipant] = useState<Participant>({ name: "", selected: true });
    return (
        <div className="new-participant">
            <h2>Add Player</h2>
            <div className="participant-form">
                <label htmlFor="participant-name">Name: </label>
                <input
                    type="text"
                    id="participant-name"
                    value={newParticipant.name}
                    onChange={({ target: { value } }) => {
                        setNewParticipant({ name: value, selected: true })
                    }}
                />
                <button
                    className="btn btn-contrast"
                    onClick={() => {
                        onSubmit(newParticipant)
                        setNewParticipant({ name: "", selected: true })
                    }}>
                    Add
                </button>
            </div>
        </div>
    )
}