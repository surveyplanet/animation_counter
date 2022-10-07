import animationCounter from '../index.js';
import { JSDOM } from 'jsdom';
import { expect } from 'chai';

describe('animationCounter', () => {
	let el;

	before(async () => {
		const markup = '<html><body></body></html>';
		const dom = new JSDOM(markup, {
			url: 'http://localhost',
		});

		// Add window and document to global scope so it's accessible from in_view.js
		global.window = dom.window;
		global.document = dom.window.document;

		el = document.createElement('div');
		el.id = 'testId';
	});
	beforeEach(async () => {
		el.textContent = '5';
	});

	it(' 1# should update the counter value without animation', async () => {
		await animationCounter(el, {
			startVal: 5,
			endVal: 100000,
			interval: 0,
			step: 1,
		});
		expect(el.textContent).to.equal('100000');
	});

	it(' 2# should update the counter value with animation', async () => {
		await animationCounter(el, {
			startVal: 5,
			endVal: 100000,
			interval: 1,
			step: 300,
		});
		expect(el.textContent).to.equal('100000');
	});

	it(' 3# should return error when start val is not a number ', async () => {
		await animationCounter(el, {
			startVal: '0',
			endVal: 100,
			interval: 0,
			step: 30,
		});
		expect(el.textContent).to.equal('100');
	});
	it(' 4# should return error when start val is not a number ', async () => {
		await animationCounter(el, {
			startVal: 0,
			endVal: '100',
			interval: 0,
			step: 30,
		});

		expect(el.textContent).to.equal('100');
	});

	it(' 5# should return numbers associated with US localize ', async () => {
		await animationCounter(el, {
			startVal: 5,
			endVal: 1000000,
			interval: 1,
			step: 3000,
			localize: 'en-us',
		});
		expect(el.textContent).to.equal('1,000,000');
	});

	it(' 6# should return numbers associated with German localize ', async () => {
		await animationCounter(el, {
			startVal: 5,
			endVal: 1000000,
			interval: 1,
			step: 3000,
			localize: 'de-DE',
		});
		expect(el.textContent).to.equal('1.000.000');
	});

	it(' 7# should check for the start value', async () => {
		const promise = animationCounter(el, {
			startVal: 5000,
			endVal: 1000000,
			interval: 1,
			step: 3000,
			localize: 'de-DE',
		});
		expect(el.textContent).to.equal('5.000');
		await promise;
		expect(el.textContent).to.equal('1.000.000');
	});
});
