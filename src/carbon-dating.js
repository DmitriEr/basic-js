const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) === "string" && parseFloat(sampleActivity) > 0 && parseFloat(sampleActivity) < 15) {
    sampleActivity = parseFloat(sampleActivity)
    return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity) * HALF_LIFE_PERIOD) / 0.693);
    }
  return false
};
