/**
 * This animationCounter function will count up from start value to end value with a given interval and step. Use it to animate a number.
 *
 * @method animationCounter
 * @param {HTMLElement} el the element you want to update. It can be a string as well as a number.
 * @param {options} options Use options to pass in the start value, end value, interval, step, and localize.
 * @param {options.step} step The amount that the number will increase by each time interval.
 * @param {options.startVal} startVal The number that the counter will start at.
 * @param {options.endVal} endVal The number that the counter will end at.
 * @param {options.interval} interval The time between each step.
 * @param {options.localize} localize The language code for the number to be localized to. For example, 'en-us' for US English, 'de-de' for German, 'fr-fr' for French, etc. The default for this parameter is empty, meaning that your dots and comas won't be displayed at all. Leave this empty if you want the number to be displayed as is.
 * @return {Promise} Resolves when the animation is complete.
 * @example
 * import 'animationCounter' from '@surveyplanet/animation_counter
 * animationCounter(el, {
 *     startVal: 5,
 *    endVal: 1000000,
 *   interval: 1,
 * step: 3000,
 * localize: 'de-de',
 * });
 *
 * @example This returns count from 0 to 1.000.000 with a step of 3000 that updates every 1 millisecond.
 *
 */
const animationCounter = (el, options = {}) => {
	if (Object.prototype.toString.call(el) === '[object String]') {
		el = document.querySelector(el);
	}

	options = {
		...{
			startVal: 0,
			endVal: 100,
			interval: 10,
			step: 1,
		},
		...options,
	};
	if (isNaN(options.startVal)) {
		throw new Error('startVal must be a number');
	}
	if (isNaN(options.endVal)) {
		throw new Error('endVal must be a number');
	}
	if (isNaN(options.interval)) {
		throw new Error('interval must be a number');
	}
	if (isNaN(options.step)) {
		throw new Error('step must be a number');
	}

	options.startVal = Number(options.startVal);
	options.endVal = Number(options.endVal);
	options.interval = Number(options.interval);
	options.step = Number(options.step);

	return new Promise((resolve, reject) => {
		if (options.interval === 0) {
			el.textContent = options.endVal;
			return resolve();
		}

		let count = options.startVal;
		const counter = setInterval(() => {
			count += options.step;
			el.textContent = count;
			if (count >= options.endVal) {
				let endVal =
					options.localize && options.localize.length
						? Intl.NumberFormat(options.localize, {
								maximumSignificantDigits: 3,
						  }).format(options.endVal)
						: options.endVal;
				el.textContent = endVal;
				clearInterval(counter);

				return endVal && resolve();
			}
		});
	});
};

export default animationCounter;
