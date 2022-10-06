# MODULE NAME

Module description

## Install

```bash
npm install --save @surveyplanet/animation_counter
```

## Example

```js
import MyModule from '@surveyplanet/animation_counter';
// Run `jsdoc2md index.js` to get options from documentation
```

## Options

<a name="animationCounter"></a>

## animationCounter(el, options, step, startVal, endVal, interval, localize) ⇒ <code>Promise</code>

This animationCounter function will count up from start value to end value with a given interval and step. Use it to animate a number.

**Kind**: global function  
**Returns**: <code>Promise</code> - Resolves when the animation is complete.

| Param    | Type                          | Description                                                                                                                            |
| -------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| el       | <code>HTMLElement</code>      | the element you want to update. It can be a string as well as a number.                                                                |
| options  | <code>options</code>          | Use options to pass in the start value, end value, interval, step, and localize.                                                       |
| step     | <code>options.step</code>     | The amount that the number will increase by each time interval.                                                                        |
| startVal | <code>options.startVal</code> | The number that the counter will start at.                                                                                             |
| endVal   | <code>options.endVal</code>   | The number that the counter will end at.                                                                                               |
| interval | <code>options.interval</code> | The time between each step.                                                                                                            |
| localize | <code>options.localize</code> | The language code for the number to be localized to. For example, 'en-us' for US English, 'de-de' for German, 'fr-fr' for French, etc. |

**Example**

```js
import 'animationCounter' from '@surveyplanet/animation_counter
animationCounter(el, {
    startVal: 5,
   endVal: 1000000,
  interval: 1,
step: 3000,
localize: 'de-de',
});
```

**Returns**

This returns count from 0 to 1.000.000 with a step of 3000 that updates every 1 millisecond.

## Testing

```bash
npm install
npm run test
```
