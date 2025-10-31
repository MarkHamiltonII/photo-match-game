import type { ChildProp } from "../../../types";
import "./modalTitle.css"

export function ModalTitle({ children }: ChildProp) {
    return (
        <h2 className="modal-title">{children}</h2>
    )
}