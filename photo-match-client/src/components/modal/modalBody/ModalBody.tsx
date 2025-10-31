import type { ChildProp } from "../../../types";
import "./modalBody.css";

export function ModalBody({ children }: ChildProp) {
    return (<div className="modal-body">{children}</div>)
}