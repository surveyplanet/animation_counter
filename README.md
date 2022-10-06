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

## animationCounter(el, options) ⇒ <code>type</code>

This animationCounter function will count up from start value to end value with a given interval and step. Use it to animate a number.

**Kind**: global function  
**Returns**: <code>type</code> - Promise that resolves when the animation is complete.

| Param   | Type                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el      | <code>HTMLElement</code> | the element you want to update. It can be a string as well as a number.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| options | <code>options</code>     | Use options to pass in the start value, end value, interval, step, and localize. The default values are startVal: 0, endVal: 100, interval: 0, step: 30. Localize does not have a default value, meaning that the number displayed won't have any periods or commas. If you want to localize the number, pass in the language code as a string. For example, 'en-us' for US English, 'de-de' for German, 'fr-fr' for French, etc. Interval will be in milliseconds and is the time between each step. Step is the amount that the number will increase by each time interval. |

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

This returns count from 0 to 1.000.000 with a step of 3000 that updates every 1 millisecond.

## Testing

```bash
npm install
npm test
```
