import type { ChildProp } from "../../../types";
import "./modalHeader.css"

export function ModalHeader({ children }: ChildProp) {
    return (<div className="modal-header">{children}</div>)
}