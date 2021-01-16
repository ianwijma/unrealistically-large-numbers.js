import DecimalObject from "../../object/decimal.object";

export default function (x: DecimalObject, y: DecimalObject): boolean {
    const { decimal: xDecimal } = x;
    const { decimal: yDecimal } = y;
    return xDecimal.greaterThan(yDecimal);
}
