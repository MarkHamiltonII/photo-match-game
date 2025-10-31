import { handleImageRepositoryUpdate, handleNextImage, handleParticipantRepositoryUpdate, handleTotalRepositoryUpdate } from "./handlers";
import type { Action, State } from "./types";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "next_image":
            return handleNextImage(state);
        case "toggle_modal":
            const { isModalOpen } = state;
            return { ...state, isModalOpen: !isModalOpen };
        case "update_paricipant_repository":
            return handleParticipantRepositoryUpdate(state, action.payload)
        case "update_image_repository":
            return handleImageRepositoryUpdate(state, action.payload)
        case "total_repository_update":
            return handleTotalRepositoryUpdate(state, action.payload)
        default:
            return state;
    }
}