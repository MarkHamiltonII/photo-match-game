export function takePhoto(video: HTMLVideoElement): string | null {
    const width = video.videoWidth;
    const height = video. videoHeight;

    if (!width || ! height) return null;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = canvas.toDataURL('image/png', 0.92)
    return dataUrl;
}