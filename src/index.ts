import Decimal from 'decimal.js';

Decimal.set({
    precision: 3,
    rounding: Decimal.ROUND_HALF_EVEN,
    modulo: Decimal.ROUND_HALF_EVEN,
    minE: 0,
});

