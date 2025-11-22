import type { Participant, Image } from "../../types";
import type { State } from "../types";
import { handleNextImage } from "./handleNextImage";

export function handleSettingsMenuUpdate(
    state: State,
    payload: {
        participantRepository: Participant[],
        imageRepository: Image[],
        cameraEnabled: boolean,
    }
) {
    const { imageRepository, participantRepository, cameraEnabled } = payload;
    const updatedParticipantList = participantRepository.filter(p => p.selected);
    const updatedImageList = imageRepository.filter(i => i.selected);
    const participantsUpdated: State = {
        ...state,
        participantRepository,
        participantList: updatedParticipantList,
        imageRepository,
        imageList: updatedImageList,
        cameraEnabled
    };
    return handleNextImage(participantsUpdated);
}