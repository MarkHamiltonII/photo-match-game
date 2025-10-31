import { useState } from "react";
import { Checkbox } from "../../components";
import type { Image } from "../../types";
import "./selectImages.css";
import { NewImage } from "./newImage";

export function SelectImages(props: Props) {
    const { images, onChange } = props;
    const [hover, setHover] = useState<string | undefined>()

    return (
        <div className="image-list-container">
            <div className="image-toggle-list">
                {images.map(image => (
                    <Checkbox
                        value={image.url}
                        checked={image.selected}
                        onClick={(checked) => {
                            const updatedimageList = [...images.map(p => p === image ? { ...p, selected: checked } : p)];
                            onChange(updatedimageList);
                        }}
                        label={
                            <div className="small-image">
                                <img
                                    src={image.url}
                                    onMouseEnter={() => setTimeout(() => setHover(image.url), 300)}
                                    onMouseLeave={() => setHover(undefined)}
                                />
                            </div>
                        }
                    />
                ))}
            </div>
            {hover ? (<div className="overlay"><img src={hover} /></div>) :
            <NewImage onSubmit={(newImage) => onChange([newImage, ...images])} />}
        </div>
    )

}

type Props = {
    images: Image[];
    onChange: (images: Image[]) => void;
}