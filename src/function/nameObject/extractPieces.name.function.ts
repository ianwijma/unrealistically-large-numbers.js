import extractPieceFn from './extractPiece.name.function';
import {CleanName, NamePieces} from "../../type";

export default function (name: CleanName = ''): NamePieces
{
    const namePieces: number[] = [];

    while (name.length > 0) {
        const { leftoverName, piece } = extractPieceFn(name);
        name = leftoverName;
        namePieces.push(piece);
    }

    return namePieces;
}
