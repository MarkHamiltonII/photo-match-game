import type { Image } from "../../types";
import type { State } from "../types";
import { handleNextImage } from "./handleNextImage";

export function handleImageRepositoryUpdate(state: State, payload: Image[]) {
    const updatedImageList = payload.filter(p => p.selected);
    const imagesUpdated: State = { ...state, imageRepository: payload, imageList: updatedImageList };
    return handleNextImage(imagesUpdated);
}