import { useState } from "react";
import { FaUser, FaImages  } from "react-icons/fa"
import { Modal, Tabs } from "../../components";
import type { Image, NoParamaterReturnVoidFunction, Participant } from "../../types";
import "./updateSettingsModal.css";
import { SelectImages } from "../selectImages";
import { SelectParticipants } from "../selectParticipants";

export function UpdateSettingsModal(props: Props) {
    const { imageRepository: inputImageRepository, participantRepository: inputParticipantRepository, onAccept, onCancel } = props;
    const [state, setState] = useState<ModalState>({
        imageRepository: inputImageRepository,
        participantRepository: inputParticipantRepository,
        selection: "Participants"
    })
    const { imageRepository, participantRepository, selection } = state;
    
    const tabOptions: { tabName: TabOption, label: React.ReactNode}[] = [{ tabName: "Participants", label: <><FaUser/> Participants</>},
        {tabName: "Images", label: <><FaImages/> Images</>}
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
    onAccept: (repositories: { imageRepository: Image[], participantRepository: Participant[] }) => void;
    onCancel: NoParamaterReturnVoidFunction;
}

type TabOption = "Participants" | "Images"
type ModalState = {
    imageRepository: Image[];
    participantRepository: Participant[];
    selection: TabOption
}