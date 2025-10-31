import { useReducer } from 'react'
import './App.css'
import { startingImages, startingPlayers } from "./constants"
import { NavBar } from './components'
import { getRandomItemFromList, getRandomNonRepeatingItemsFromList } from './util';
import { ParticipantList, UpdateSettingsModal } from './features';
import { reducer } from './reducer';

export default function App() {
  const startingImage = getRandomItemFromList(startingImages);
  const startingImageList = startingImages.filter(image => image !== startingImage);
  const startingParticpants = getRandomNonRepeatingItemsFromList(startingPlayers, startingImage.participants);
  const startingParticipantsList = startingPlayers.filter(player => !startingParticpants.includes(player));
  const [state, dispatch] = useReducer(reducer, {
    imageRepository: startingImages,
    participantRepository: startingPlayers,
    currentImage: startingImage,
    imageList: startingImageList,
    currentParticpants: startingParticpants,
    participantList: startingParticipantsList,
    isModalOpen: false
  })
  const { imageRepository, participantRepository, currentImage: { url }, currentParticpants, isModalOpen } = state;
  const toggleModal = () => dispatch({ type: "toggle_modal" });

  const halfIndex = Math.ceil(currentParticpants.length / 2)
  const firstHalfParticipants = currentParticpants.slice(0, halfIndex);
  const secondHalfParticipants = currentParticpants.slice(halfIndex);


  return (
    <div className='app-shell'>
      {isModalOpen &&
        <UpdateSettingsModal
          imageRepository={imageRepository}
          participantRepository={participantRepository}
          onCancel={toggleModal}
          onAccept={
            ({
              imageRepository: updatedImages,
              participantRepository: updatedParticipants
            }) => {
              dispatch({
                type: "total_repository_update",
                payload: {
                  imageRepository: updatedImages,
                  participantRepository: updatedParticipants
                }
              });
              toggleModal();
            }}
        />
      }
      <NavBar onEditSettings={toggleModal} />
      <div className='app-body'>
        <ParticipantList participantList={firstHalfParticipants} />
        <img src={url}></img>
        <ParticipantList participantList={secondHalfParticipants} />
      </div>
      <button className='btn' onClick={() => dispatch({ type: "next_image" })}>Next Image</button>

    </div>
  )
}