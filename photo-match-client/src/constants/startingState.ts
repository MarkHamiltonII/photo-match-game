import type { State } from "../reducer/types";
import { getRandomItemFromList, getRandomNonRepeatingItemsFromList } from "../util";
import { startingImages } from "./images";
import { startingPlayers } from "./participants";

const startingImage = getRandomItemFromList(startingImages);
  const startingImageList = startingImages.filter(image => image !== startingImage);
  const startingParticpants = getRandomNonRepeatingItemsFromList(startingPlayers, startingImage.participants);
  const startingParticipantsList = startingPlayers.filter(player => !startingParticpants.includes(player));

  export const startingState: State =  {
    imageRepository: startingImages,
    participantRepository: startingPlayers,
    currentImage: startingImage,
    imageList: startingImageList,
    currentParticpants: startingParticpants,
    participantList: startingParticipantsList,
    isModalOpen: false,
    cameraEnabled: true,
  }