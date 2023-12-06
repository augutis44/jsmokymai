// Simple heart rate limits calculator utility. 
// Implement simple calculator utility-program, which can be used to
//  calculate person's heart rate limits when doing aerobic ecercise.
//  The formula for calculating hear rate limits is (220-age) * 0.85 for 
// upper limit and (220-age) * 0.65 for lower limit. For example heart
//  rate limits for person aged 30 are (220-30) * 0.85 = 161.5 and (220-30) * 0.65 = 123.

let age = 30;

let heartRateUpperLimit = (220-age) * 0.85;
let heartRateLowerLimit = (220-age) * 0.65;

console.log(`Person aged ${age} has ${heartRateUpperLimit} upper and ${heartRateLowerLimit} lower limits when doing aerobic ecercise.`);