# Shopping Cart examples (semi-complete)

### Introduction

Functional fragment from typical task of building online shop's client-side interface built for the purpose of self-education and practise. Same task done in four variations:
1. Basic JavaScript
2. React
3. React + Redux
4. React + MobX

### Installation
For Basic JS version nothing is required except for a browser, so just 2-click index.html. Works in Chrome and Firefox, utter mess in +/-IE11.
For other versions:
- "npm/yarn install"
- "npm/yarn start"

### What it does:
In real life application(RLA) we would have been fetching data from the back-end, but here i am just emulating this process by generating random data and putting it in application state. The amount of this data can be manually adjusted from the input field, but there is no upper limit so, friendly advise, do not harass your browser with exceptionally large numbers. Or you can do it to test speed perfomance and my results were:

| Amount | Load SPD, sec | Change SPD, sec |
| ------ |:-------------:| --------------: |
| 10 000 |       5       |        1        |
| 20 000 |       8       |        2        |
| 30 000 |       13      |        3        |
| 40 000 |       22      |        4        |
| 50 000 |       30      |        5        |

^It's not like anyone would want you to show even 1000 items at the same time though.

Next, standart func of adding/removing items from the basket. Nothing magical in itself, but it remembers your choice(which is crucial for the filter func) and not just an 'illusion'(although in RLA everything would have been much simplier with backend).
Last, but not least, is a filter func that filters(duh) displayed items by the category and shows only those that loosly matches the filter. Fires on input, so it has this nice effect of real-time reaction to user's actions.

### To-Do:

-Refactoring
JS version cries and begs for this, all the others are fine in that aspect but can be cleaned a bit

-Styling
Not really necessary, but overall design is subpar at best and can be improved

-Additional func
Goes beyond initial task, but can be done.
