/**
 * This animationCounter function will count up from start value to end value with a given interval and step. Use it to animate a number.
 *
 * @method animationCounter
 * @param {HTMLElement|String} el The element you want to update. You may pass in an HTMLElement or an ID or class name.
 * @param {options} options Counter options.
 * @param {Number} optinos.step The amount that the number will increase by each interval.
 * @param {Number} optinos.startVal The number that the counter will start at.
 * @param {Number} optinos.endVal The number that the counter will end at.
 * @param {Number} optinos.interval The time in millisecond between each step.
 * @param {Number} optinos.localize The language code for the number to be localized to. For example, 'en-US' for US English, 'de-de' for German, 'fr-fr' for French, etc. The default for this parameter is empty, meaning that your dots and comas won't be displayed at all. Leave this empty if you want the number to be displayed as is.
 * @return {Promise}
 * @example
 * import 'animationCounter' from '@surveyplanet/animation_counter
 * const el = document.getElementById('#counter');
 * animationCounter(el, {
 *    startVal: 5,
 *    endVal: 1000000,
 *    interval: 1,
 *    step: 3000,
 *    localize: 'de-DE',
 * });
 */
const animationCounter = (el, options = {}) =>
{
    if (Object.prototype.toString.call(el) === '[object String]')
    {
        el = document.querySelector(el);
    }

    options = {
        ...
        {
            startVal: 0,
            endVal: 100,
            interval: 10,
            step: 1,
        },
        ...options,
    };
    if (isNaN(options.startVal))
    {
        throw new Error('startVal must be a number');
    }
    if (isNaN(options.endVal))
    {
        throw new Error('endVal must be a number');
    }
    if (isNaN(options.interval))
    {
        throw new Error('interval must be a number');
    }
    if (isNaN(options.step))
    {
        throw new Error('step must be a number');
    }

    options.startVal = Number(options.startVal);
    options.endVal = Number(options.endVal);
    options.interval = Number(options.interval);
    options.step = Number(options.step);

    return new Promise((resolve, reject) =>
    {
        if (options.interval === 0)
        {
            el.textContent = options.endVal;
            return resolve();
        }

        let count = options.startVal;

        const counter = setInterval(() =>
        {
            count += options.step;
            el.textContent = count;
            if (count >= options.endVal)
            {

                let endVal =
                    options.localize && options.localize.length ?
                    Intl.NumberFormat(options.localize,
                    {
                        maximumSignificantDigits: 3,
                    }).format(options.endVal) :
                    options.endVal;

                el.textContent = endVal;

                clearInterval(counter);

                return resolve();

            }
        });
    });
};

export default animationCounter;