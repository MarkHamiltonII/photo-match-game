import { useState } from "react";
import { FaUser, FaImages, FaVideo  } from "react-icons/fa"
import { Modal, Tabs, Toggle } from "../../components";
import type { Image, NoParamaterReturnVoidFunction, Participant } from "../../types";
import "./updateSettingsModal.css";
import { SelectImages } from "../selectImages";
import { SelectParticipants } from "../selectParticipants";

export function UpdateSettingsModal(props: Props) {
    const { imageRepository: inputImageRepository, participantRepository: inputParticipantRepository, cameraEnabled: inputCameraEnabled, onAccept, onCancel } = props;
    const [state, setState] = useState<ModalState>({
        cameraEnabled: inputCameraEnabled,
        imageRepository: inputImageRepository,
        participantRepository: inputParticipantRepository,
        selection: "Participants"
    })
    const { imageRepository, participantRepository, selection, cameraEnabled } = state;
    
    const tabOptions: { tabName: TabOption, label: React.ReactNode}[] = [{ tabName: "Participants", label: <><FaUser/> Participants</>},
        {tabName: "Images", label: <><FaImages/> Images</>},
        {tabName: "Camera", label: <><FaVideo/> Camera</>}
    ]
    return (
        <Modal
            body={<>
                <Tabs tabNames={tabOptions} selection={selection} onSelection={(selectedTab) => setState({ ...state, selection: selectedTab })} />
                {selection === "Participants" &&
                    <SelectParticipants
                        participants={participantRepository}
                        onChange={(updatedParticipants) => setState({ ...state, participantRepository: updatedParticipants })} 
                        />
                }
                {selection === "Images" &&
                    <SelectImages
                        images={imageRepository}
                        onChange={(updatedImages) => setState({ ...state, imageRepository: updatedImages })}
                    />
                }
                {selection === "Camera" &&
                    <Toggle onChange={(value)=>{setState({...state, cameraEnabled: value })}} value={cameraEnabled} labels={{ label: "Camera:"}} />
                }
            </>
            }
            onConfirmClick={() => onAccept(state)}
            onCancelClick={onCancel}
            title={"Edit " + selection}
        />
    )

}

type Props = {
    imageRepository: Image[];
    participantRepository: Participant[];
    cameraEnabled: boolean;
    onAccept: (repositories: { imageRepository: Image[], participantRepository: Participant[], cameraEnabled: boolean }) => void;
    onCancel: NoParamaterReturnVoidFunction;
}

type TabOption = "Participants" | "Images" | "Camera"
type ModalState = {
    imageRepository: Image[];
    participantRepository: Participant[];
    selection: TabOption;
    cameraEnabled: boolean;
}