import {CleanName, RawName} from "../../type";

export default function (rawName: RawName = ''): CleanName
{
    return rawName
        // Remove all non words characters
        .replace(/\W/, '');
};
