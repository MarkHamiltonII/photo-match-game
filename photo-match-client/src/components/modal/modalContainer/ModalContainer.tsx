import type { ChildProp } from "../../../types"
import "./modalContainer.css"

export function ModalContainer({ children }: ChildProp) {
    return <div className="modal">{children}</div>
}