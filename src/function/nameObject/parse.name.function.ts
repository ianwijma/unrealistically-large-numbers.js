import NameObject from "../../object/name.object";
import cleanFn from './clean.name.function';
import extractPiecesFn from './extractPieces.name.function';
import {CleanName, RawName} from "../../type";

export default function (rawName: RawName = ''): NameObject
{
    const cleanName: CleanName = cleanFn( rawName );
    const namePieces = extractPiecesFn(cleanName);
    return new NameObject(namePieces);
};
