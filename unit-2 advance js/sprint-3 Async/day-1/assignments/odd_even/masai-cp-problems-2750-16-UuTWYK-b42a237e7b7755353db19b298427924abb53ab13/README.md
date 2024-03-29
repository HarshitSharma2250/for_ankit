# JS-Promises-Odd-Even

## Submission Instructions [Please note]

## Maximum Marks - 11

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ returns an error for non-numbers - 2 mark
 ✅ returns "odd" for odd numbers - 2 mark
 ✅ returns "even" for even numbers - 2 marks
 ✅ resolves in 2 seconds for odd numbers - 2 marks
 ✅ resolves in 4 seconds for even numbers - 2 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to complete the `getData` function such that it fulfills the below criteria:

1.  Your function must always return a promise
2.  If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
3.  If data is an odd number, return a promise resolve 2 seconds later and give the data "odd" (in a string)
4.  If data is an even number, return a promise resolve 4 seconds later and give the data "even" (in a string)

## Boilerplate

- Do not change the given folder structure
- inside src you will oddEven.js file that is where you need to write the mentioned methods
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
