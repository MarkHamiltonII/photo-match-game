import type { NoParamaterReturnVoidFunction } from "../../types";
import { FaCog } from "react-icons/fa";
import "./navbar.css";
import { useIsMobile } from "../../hooks";

export function NavBar(props: Props) {
    const { onEditSettings } = props;
    const isMobile = useIsMobile();
    if (isMobile) {

    }

    return (
        <div className={`navbar ${isMobile ? "mobile" : ""}`}>
            <div className="navbar-left">
                <p className="logo">Photo Match</p>
            </div>
            <div className="navbar-right">
                <button className="btn btn-high-contrast" onClick={() => onEditSettings()}>
                    <FaCog /> Settings
                </button>
            </div>
        </div>
    )
}

type Props = {
    onEditSettings: NoParamaterReturnVoidFunction,
}