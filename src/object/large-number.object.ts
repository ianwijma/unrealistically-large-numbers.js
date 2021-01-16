import NameObject from "./name.object";
import DecimalObject from "./decimal.object";

export default class LargeNumberObject {
    constructor(
        public decimalObject: DecimalObject = new DecimalObject(),
        public nameObject: NameObject = new NameObject()
    ) {}
}
