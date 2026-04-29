/**
 * ============================================================
 *  HMRC TAX RATES — 2025/26
 *  Update this file each April. All widgets pull from here.
 * ============================================================
 */

const TAX_RATES = {
    TAX_YEAR: '2025/26',

    // Personal Allowance
    STD_PA: 12570,

    // Income Tax bands (England & Wales)
    BASIC_LIMIT: 50270,   // top of basic rate band
    HIGHER_LIMIT: 125140,  // top of higher rate band
    BASIC_RATE: 0.20,
    HIGHER_RATE: 0.40,
    ADDITIONAL_RATE: 0.45,

    // PA taper — starts at £100,000
    PA_TAPER_START: 100000,

    // Class 4 NI
    C4_LOWER: 12570,
    C4_UPPER: 50270,
    C4_LOWER_RATE: 0.06,
    C4_UPPER_RATE: 0.02,

    // Class 2 NI
    C2_THRESHOLD: 12570,
    C2_ANNUAL: 179,     // £3.45/week × 52
};