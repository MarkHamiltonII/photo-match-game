import type { Image, Participant } from "../types";

export type State = {
  imageRepository: Image[];
  participantRepository: Participant[];
  currentImage: Image,
  imageList: Image[],
  currentParticpants: Participant[],
  participantList: Participant[],
  isModalOpen: boolean
}

export type Action =
  { type: "next_image" | "toggle_modal" } |
  UpdateImageRepositoryAction |
  UpdateParticipantRepositoryAction |
  TotalRepositoryUpdateAction
 

export type UpdateParticipantRepositoryAction = { 
    type: "update_paricipant_repository", 
    payload: Participant[] 
}

export type UpdateImageRepositoryAction = { 
    type: "update_image_repository", 
    payload: Image[] 
}

export type TotalRepositoryUpdateAction = {
    type: "total_repository_update",
    payload: { 
        imageRepository: Image[], 
        participantRepository: Participant[]
    }
}