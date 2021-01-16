import Decimal from "decimal.js";

export default class DecimalObject {
    constructor(
        public decimal: Decimal = new Decimal(0)
    ) {}
}
