import { handleImageRepositoryUpdate, handleNextImage, handleParticipantRepositoryUpdate, handleSettingsMenuUpdate } from "./handlers";
import type { Action, State } from "./types";

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "next_image":
            return handleNextImage(state);
        case "toggle_modal":
            const { isModalOpen } = state;
            return { ...state, isModalOpen: !isModalOpen };
        case "toggle_camera":
            const { cameraEnabled } = state;
            return { ...state, cameraEnabled: !cameraEnabled};
        case "update_paricipant_repository":
            return handleParticipantRepositoryUpdate(state, action.payload)
        case "update_image_repository":
            return handleImageRepositoryUpdate(state, action.payload)
        case "settings_menu_update":
            return handleSettingsMenuUpdate(state, action.payload)
        default:
            return state;
    }
}