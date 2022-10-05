/**
 * Description.
 *
 * @method animationCounter
 * @param {HTMLElement} el desc
 * @param {options} options desc
 * @return {type} priomise desc
 * @example
 * import 'func' from '@surveyplanet/animation_counter'
 */
const animationCounter = (el, options = {}) => {
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
