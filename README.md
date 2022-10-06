# Animation counter

Animates a number in the DOM by counting up or down.

## Install

```bash
npm install --save @surveyplanet/animation_counter
```

## Example

```js
import 'animationCounter' from '@surveyplanet/animation_counter
const el = document.getElementById('#counter');
animationCounter(el, {
   startVal: 5,
   endVal: 1000000,
   interval: 1,
   step: 3000,
   localize: 'de-DE',
});
```

## Options

| Param            | Type                                            | Description                                                                                                                                                                                                                                                                                                |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| el               | <code>HTMLElement</code> \| <code>String</code> | The element you want to update. You may pass in an HTMLElement or an ID or class name.                                                                                                                                                                                                                     |
| options          | <code>options</code>                            | Counter options.                                                                                                                                                                                                                                                                                           |
| optinos.step     | <code>Number</code>                             | The amount that the number will increase by each interval.                                                                                                                                                                                                                                                 |
| optinos.startVal | <code>Number</code>                             | The number that the counter will start at.                                                                                                                                                                                                                                                                 |
| optinos.endVal   | <code>Number</code>                             | The number that the counter will end at.                                                                                                                                                                                                                                                                   |
| optinos.interval | <code>Number</code>                             | The time in millisecond between each step.                                                                                                                                                                                                                                                                 |
| optinos.localize | <code>Number</code>                             | The language code for the number to be localized to. For example, 'en-US' for US English, 'de-de' for German, 'fr-fr' for French, etc. The default for this parameter is empty, meaning that your dots and comas won't be displayed at all. Leave this empty if you want the number to be displayed as is. |

## Testing

```bash
npm install
npm run test
```
