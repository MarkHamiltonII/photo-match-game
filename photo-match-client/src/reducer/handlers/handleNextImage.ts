import { getRandomItemFromList, getRandomNonRepeatingItemsFromList } from "../../util";
import type { State } from "../types";

export function handleNextImage(state: State): State {
  const { imageRepository, participantRepository, participantList, imageList, isModalOpen } = state;
  const startingPlayers = participantRepository.filter(p => p.selected)
  const imagesToUse = imageList.length ? imageList : imageRepository.filter(i => i.selected)
  const newImage = getRandomItemFromList(imagesToUse);
  const updatedImageList = imagesToUse.filter(image => image !== newImage);

  const { participants: numberOfNewParticipants } = newImage;

  if (numberOfNewParticipants <= participantList.length) {
    const updatedCurrentParticipants = getRandomNonRepeatingItemsFromList(participantList, numberOfNewParticipants);
    const updatedParticipantList = participantList.filter(participant => !updatedCurrentParticipants.includes(participant))
    return {
      ...state,
      currentImage: newImage,
      imageList: updatedImageList,
      currentParticpants: updatedCurrentParticipants,
      participantList: updatedParticipantList,
      isModalOpen
    }
  }
  const numberOfParticipantsFromNewList = numberOfNewParticipants - participantList.length;
  const resetParticipantList = startingPlayers.filter(player => !participantList.includes(player));
  const partipantsFromNewList = getRandomNonRepeatingItemsFromList(resetParticipantList, numberOfParticipantsFromNewList);
  const updatedCurrentParticipants = [...participantList, ...partipantsFromNewList];
  const updatedParticipantsList = startingPlayers.filter(player => !partipantsFromNewList.includes(player))
  return {
    ...state,
    currentImage: newImage,
    imageList: updatedImageList,
    currentParticpants: updatedCurrentParticipants,
    participantList: updatedParticipantsList,
    isModalOpen
  }
}