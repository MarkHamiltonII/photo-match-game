import { useReducer, useRef } from 'react'
import './App.css'
import { startingState } from "./constants"
import { NavBar } from './components'
import { CameraViewer, ParticipantList, UpdateSettingsModal } from './features';
import { reducer } from './reducer';
import { useGetImageWidth } from './hooks';

export default function App() {
  const [state, dispatch] = useReducer(reducer, startingState)
  const { imageRepository, participantRepository, currentImage: { url }, currentParticpants, isModalOpen, cameraEnabled } = state;
  const toggleModal = () => dispatch({ type: "toggle_modal" });

  const halfIndex = Math.ceil(currentParticpants.length / 2)
  const firstHalfParticipants = currentParticpants.slice(0, halfIndex);
  const secondHalfParticipants = currentParticpants.slice(halfIndex);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const width = useGetImageWidth({ imageRef, url })

  return (
    <div className='app-shell'>
      {isModalOpen &&
        <UpdateSettingsModal
          imageRepository={imageRepository}
          participantRepository={participantRepository}
          cameraEnabled={cameraEnabled}
          onCancel={toggleModal}
          onAccept={
            ({
              imageRepository: updatedImages,
              participantRepository: updatedParticipants,
              cameraEnabled: updatedCameraEnabled
            }) => {
              dispatch({
                type: "settings_menu_update",
                payload: {
                  imageRepository: updatedImages,
                  participantRepository: updatedParticipants,
                  cameraEnabled: updatedCameraEnabled
                }
              });
              toggleModal();
            }}
        />
      }
      <NavBar onEditSettings={toggleModal} />
      <div className='app-body'>
        <ParticipantList participantList={firstHalfParticipants} />
        {cameraEnabled && <CameraViewer videoWidth={width}/>}
        <img src={url} ref={imageRef}></img>
        <ParticipantList participantList={secondHalfParticipants} />
      </div>
      <button className='btn' onClick={() => dispatch({ type: "next_image" })}>Next Image</button>

    </div>
  )
}