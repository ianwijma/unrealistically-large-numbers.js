import {NAMES_MAP} from "../../constant/name.constant";
import {CleanName, NamePiece} from "../../type";

export default function (name: CleanName = ''): NamePiece
{
    let leftoverName: string = '';
    let piece: number = 0;

    if (name.length > 0) {
        for ( let i = NAMES_MAP.length; i >= 0; i--) {
            const namePiece = NAMES_MAP[i];
            const index = name.lastIndexOf(namePiece);
            const expectedIndex = name.length - namePiece.length;
            if (index === expectedIndex) {
                leftoverName = name.substring(0, index);
                piece = i;
            }
        }
    }

    return { leftoverName, piece };
}
