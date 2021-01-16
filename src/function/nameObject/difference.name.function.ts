import NameObject from "../../object/name.object";

/**
 * If the function returns:
 *  0: x & y are equal
 *  1: x is one higher
 *  -1: x is one lower
 *  2: x is more then one higher
 *  -2: x is more then one lower
 * @param x number
 * @param y number
 * @returns number
 */
export default function (x: NameObject, y: NameObject): number
{
    // TODO: Fix function.
    const { namePieces: xNamePieces } = x;
    const { namePieces: yNamePieces } = y;

    if (xNamePieces.length > yNamePieces.length) {
        return 2
    } else if ( xNamePieces.length < yNamePieces.length ) {
        return -2
    }

    const [ xNamePiece, ...x_ ] = xNamePieces.reverse();
    const [ yNamePiece, ...y_ ] = yNamePieces.reverse();

    return xNamePiece - yNamePiece;
}
