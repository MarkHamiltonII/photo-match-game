import { useState } from "react";
import type { Image } from "../../../types";
import "./newImage.css";

export function NewImage({ onSubmit }: { onSubmit: (image: Image) => void }) {
    const [newImage, setNewImage] = useState<Image>({ url: "", participants: 0, selected: true })
    const { url, participants } = newImage;
    return (
        <div className="new-image">
            <h2>Add a Photo!</h2>
            <div className="new-image-input">
                <div className="image-form-input">
                    <label htmlFor="new-image-url">Image link: </label>
                    <input
                        type="url"
                        id="new-image-url"
                        value={url}
                        onChange={({ target: { value } }) => {
                            setNewImage({ ...newImage, url: value })
                        }}
                    />
                </div>
                <div className="image-form-input">
                    <label htmlFor="new-image-participants">
                        Number of People in Image:
                    </label>
                    <input
                        type="number"
                        id="new-image-participants"
                        value={participants}
                        onChange={({ target: { value } }) => {
                            setNewImage({ ...newImage, participants: Number(value) })
                        }} />
                </div>
            </div>
            <button
                className="btn"
                onClick={() => {
                    onSubmit(newImage);
                    setNewImage({ url: "", participants: 0, selected: true })
                }}>
                Submit
            </button>
        </div>
    )
}