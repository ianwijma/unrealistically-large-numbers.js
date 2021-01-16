import DecimalObject from "../../object/decimal.object";

export default function (functionName: string = 'mul')
{
    return function(x: DecimalObject, y: DecimalObject): DecimalObject
    {
        const { decimal: xDecimal } = x;
        const { decimal: yDecimal } = y;
        // @ts-ignore Just a wrapper to make the function work
        const aDecimal = xDecimal[functionName](yDecimal);
        return new DecimalObject(aDecimal);
    }
}
