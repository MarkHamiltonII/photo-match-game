import type { NoParamaterReturnVoidFunction } from "../../types";
import { Backdrop } from "./backdrop";
import { ModalContainer } from "./modalContainer";

import "./modal.css";
import { ModalHeader } from "./modalHeader";
import { ModalTitle } from "./modalTitle";
import { Close } from "./close";
import { ModalBody } from "./modalBody";
import { ModalFooter } from "./modalFooter";

export function Modal(props: Props) {
    const {
        body,
        onConfirmClick,
        title,
        cancelButtonText = "Cancel",
        confirmButtonText = "Ok",
        onCancelClick,
        onCloseClick,
        onBackdropClick
    } = props;
    const handleCancelClick = () => onCancelClick ? onCancelClick() : () => {};
    const handleCloseClick = () => onCloseClick ? onCloseClick() : handleCancelClick();
    const handleBackdropClick = () => onBackdropClick ? onBackdropClick() : onConfirmClick();
    return (
        <>
            <Backdrop onClick={() => handleBackdropClick()} />
            <ModalContainer>
                <ModalHeader>
                    <ModalTitle>{title}</ModalTitle>
                    <Close onClick={() => handleCloseClick()} />
                </ModalHeader>
                <ModalBody>{body}</ModalBody>
                <ModalFooter cancelButtonText={cancelButtonText} confirmButtonText={confirmButtonText} onConfirmClick={onConfirmClick} onCancelClick={onCancelClick} />
            </ModalContainer>
        </>
    )
}

type Props = {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    onConfirmClick: NoParamaterReturnVoidFunction;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onCancelClick?: NoParamaterReturnVoidFunction;
    onCloseClick?: NoParamaterReturnVoidFunction;
    onBackdropClick?: NoParamaterReturnVoidFunction;
}