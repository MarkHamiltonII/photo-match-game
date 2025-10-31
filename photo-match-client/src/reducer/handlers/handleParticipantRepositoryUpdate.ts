import type { Participant } from "../../types";
import type { State } from "../types";
import { handleNextImage } from "./handleNextImage";

export function handleParticipantRepositoryUpdate(state: State, payload: Participant[]) {
    const updatedParticipantList = payload.filter(p => p.selected);
    const participantsUpdated: State = { ...state, participantRepository: payload, participantList: updatedParticipantList };
    return handleNextImage(participantsUpdated);
}