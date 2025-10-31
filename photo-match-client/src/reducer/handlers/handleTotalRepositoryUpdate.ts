import type { Participant, Image } from "../../types";
import type { State } from "../types";
import { handleNextImage } from "./handleNextImage";

export function handleTotalRepositoryUpdate(
    state: State,
    payload: {
        participantRepository: Participant[],
        imageRepository: Image[]
    }
) {
    const { imageRepository, participantRepository } = payload;
    const updatedParticipantList = participantRepository.filter(p => p.selected);
    const updatedImageList = imageRepository.filter(i => i.selected);
    const participantsUpdated: State = {
        ...state,
        participantRepository,
        participantList: updatedParticipantList,
        imageRepository,
        imageList: updatedImageList
    };
    return handleNextImage(participantsUpdated);
}