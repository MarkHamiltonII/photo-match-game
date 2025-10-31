import { useRef, useState } from "react"
import "./cameraViewer.css"
import { takePhoto } from "./util";
import { useCameraSetup } from "./hooks";

export function CameraViewer(props: Props) {
    const { videoWidth } = props;
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [error, setError] = useState<string | undefined>(undefined);
    const [photo, setPhoto] = useState<string | null>(null);
    const [isActive, setIsActive] = useState(true);

    useCameraSetup({ videoRef, setError, isActive })

    function handleTakePhoto() {
        if (videoRef.current) {
            const dataUrl = takePhoto(videoRef.current);
            setPhoto(dataUrl);
        }
    }

    return (
        <div className="camera-container" style={{ width: videoWidth }}>
            {photo ?
                <img src={photo} />
                :
                <video
                    ref={videoRef}
                    playsInline
                    muted
                    controls={false}
                />}
            <div className="camera-buttons">
                <button
                    className={isActive ? "btn btn-high-contrast" : "btn"}
                    onClick={() => {
                        setIsActive(prev => !prev)
                        setPhoto(null);
                    }}>
                    {isActive ? "Stop" : "Start"} Camera
                </button>
                {!photo && <button className="btn btn-secondary" onClick={() => {
                    handleTakePhoto();
                    setIsActive(false);
                }}>
                    Take Photo
                </button>}
            </div>
            {error && (
                <div className="error" onClick={() => setError("")}>
                    {error}
                </div>
            )}
        </div>
    )
}

type Props = {
    videoWidth?: number;
}