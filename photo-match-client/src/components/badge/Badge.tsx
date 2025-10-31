import { useState } from "react";
import "./badge.css";
import { getRandomItemFromList } from "../../util";

export function Badge({ text, shouldAnimate, shouldRotate }: { text: string, shouldAnimate?: boolean, shouldRotate?: boolean }) {
    const [animate, setAnimate] = useState(false);
    const delay = Math.floor(Math.random() * (1000)) + 200;;
    const className = shouldAnimate ? getRandomItemFromList(animationOptions) : undefined;
    const rotation = shouldRotate ? getRandomItemFromList(rotationOptions) : undefined
    setTimeout(() => setAnimate(true), delay)

    const classNameToUse = (animate) ? `badge ${className} ${rotation} active` : `badge ${className} ${rotation}`;
    return (
        <p key={text} className={classNameToUse}>{text}</p>
    )
}

const animationOptions = ["spin-in", "slide-fade-in"]
const rotationOptions = ["rot10-left", "rot10-right", "rot5-left", "rot5-right", "no-rotation"]