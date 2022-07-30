/*
 * Author: 	Ivan Talijancic
 * file:	tp1.js
 * version: v1.0.0
 * content:	Program to get average score of an student
 * date:	29/07/2022
 */

/*
 * Return average score
 *
 * @param {number} acum The acumulate score
 * @param {number} samples The number of samples to calculate average score
 */
function getAverage(acum, samples) {
	return parseFloat(acum)/samples
}

/*
 * Return Max score for a set of scores
 *
 * @param {number} max The hsitorical max value between taken samples
 * @param {number} current The current value to compare with historical max
 */
function getMax(max, current) {
	return max >= current ? max : current
}

/*
 * Return min score for a set of scores
 *
 * @param {number} min The historical min value between taken samples
 * @param {number} current The current value to compare with historical min
 */
function getMin(min, current) {
	return min <= current ? min : current
}

// Init proccess
let studentName = prompt('Insert student name: ')
// Get first score o a letter to end proccess
let score = parseFloat(prompt('Insert student scores (min: 0 - max: 10), (press any letter to end proccess and see student average)'))

// Vars declaration
let acum = 0
let nScore = 0
let avg = 0
let max = 0
let min = 11
let flgAvgProccess = false

// Loop of proccess
while( !isNaN(score) ) {
	flgAvgProccess = true
	acum = acum + score
	nScore++
	avg = getAverage(acum, nScore)
	max = getMax(max, score)
	min = getMin(min, score)
	score = parseFloat(prompt('Insert nex student exam score (min: 0 - max: 10), (or any letter to end proccess): '))
	// Validate inserted score
	if (score > 10 || score < 0) {
		score = parseFloat(prompt('Inserted value, is not a valid score! (min: 0 - max: 10), insert a valid value or press any letter to end proccess:'))
	}
}

// End msg
if ( flgAvgProccess ) {
	console.log('The average score of', studentName, 'was:', avg)
	console.log('The max score of', studentName, 'was:', max)
	console.log('The min score of', studentName, 'was:', min)
} else {
	console.log('Average score was not calculated!')
}