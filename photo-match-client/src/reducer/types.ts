import type { Image, Participant } from "../types";

export type State = {
  imageRepository: Image[];
  participantRepository: Participant[];
  currentImage: Image,
  imageList: Image[],
  currentParticpants: Participant[],
  participantList: Participant[],
  isModalOpen: boolean,
  cameraEnabled: boolean;
}

export type Action =
  { type: "next_image" | "toggle_modal" | "toggle_camera"} |
  UpdateImageRepositoryAction |
  UpdateParticipantRepositoryAction |
  SettingsMenuUpdateAction
 

export type UpdateParticipantRepositoryAction = { 
    type: "update_paricipant_repository", 
    payload: Participant[] 
}

export type UpdateImageRepositoryAction = { 
    type: "update_image_repository", 
    payload: Image[] 
}

export type SettingsMenuUpdateAction = {
    type: "settings_menu_update",
    payload: { 
        imageRepository: Image[], 
        participantRepository: Participant[],
        cameraEnabled: boolean,
    }
}