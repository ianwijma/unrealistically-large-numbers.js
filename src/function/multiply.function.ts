import LargeNumberObject from "../object/large-number.object";
import multiplyFn from './decimalObject/multiply.decimal.function';
import DecimalObject from "../object/decimal.object";

export default function (x: LargeNumberObject, y: LargeNumberObject): LargeNumberObject
{
    const { decimalObject: xDecimalObject, nameObject: xNameObject } = x;
    const { decimalObject: yDecimalObject, nameObject: yNameObject } = y;
    const outDecimalObject: DecimalObject = multiplyFn(xDecimalObject, yDecimalObject);

    // TODO: Make work

}
