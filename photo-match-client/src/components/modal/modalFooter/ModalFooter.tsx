import type { NoParamaterReturnVoidFunction } from "../../../types";
import "./modalFooter.css";

export function ModalFooter(props: Props) {
    const {
        cancelButtonText,
        confirmButtonText,
        onCancelClick,
        onConfirmClick,
    } = props;
    return (
        <div className="modal-footer">
            <button className="btn" onClick={() => onConfirmClick()}>{confirmButtonText}</button>
            {!!onCancelClick && (
                <div className="modal-footer-cancel-margin-left">
                    <button className="btn btn-tertiary" onClick={() => onCancelClick()}>{cancelButtonText}</button>
                </div>
            )}
        </div>
    )
}

type Props = {
    cancelButtonText: string;
    confirmButtonText: string;
    onConfirmClick: NoParamaterReturnVoidFunction;
    onCancelClick?: NoParamaterReturnVoidFunction;
};