import { useEffect } from "react";

export function useCameraSetup(args: Args) {
    const { isActive, cameraFacing, setError, videoRef } = args;


    useEffect(() => {
        let currentStream: MediaStream | undefined = undefined;

        async function startCamera() {
            setError(undefined);
            try {
                const constraints: MediaStreamConstraints = {
                    video: {
                        facingMode: { ideal: cameraFacing },
                        width: { ideal: 1920 },
                        height: { ideal: 1080 },
                    },
                    audio: false,
                };

                currentStream = await navigator.mediaDevices.getUserMedia(constraints);

                if (videoRef.current) {
                    videoRef.current.srcObject = currentStream;
                    // Some browsers need play() after metadata loads
                    await videoRef.current.play().catch(() => {
                        // Autoplay may fail; user interaction may be required
                    })
                }
            } catch (e: any) { // Common error.name values: NotAllowedError, NotFoundError, OverconstrainedError
                setError(e?.message || "Unable to access camera");
            }
        }

        if (isActive) {
            startCamera();
        }

        return () => {
            // On unmount stop
            if (currentStream) {
                currentStream.getTracks().forEach(t => t.stop())
            }
        }
    }, [isActive, cameraFacing])

}

type Args = {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    cameraFacing: "environment" | "user";
    setError: (error: string | undefined) => void;
    isActive: boolean;
}