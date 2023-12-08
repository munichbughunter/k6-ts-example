# Template to use TypeScript with k6

This repository provides a scaffolding project to start using TypeScript in your k6 scripts.

## Rationale

While JavaScript is great for a myriad of reasons, one area where it fall short is type safety and developer ergonomics. It's perfectly possible to write JavaScript code that will look OK and behave OK until a certain condition forces the executor into a faulty branch.

While it, of course, still is possible to shoot yourself in the foot with TypeScript as well, it's significantly harder. Without adding much overhead, TypeScript will:

- Improve the ability to safely refactor your code.
- Improve readability and maintainability.
- Allow you to drop a lot of the defensive code previously needed to make sure consumers are calling functions properly.


## Prerequisites

- [k6](https://k6.io/docs/getting-started/installation)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install) (optional)

## Installation

Clone this repository on your local machine, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
npm install
```

## Running the test

To run a test written in TypeScript, we first have to transpile the TypeScript code into JavaScript. 

```bash
npx tsc
```

This command creates the final test files to the `./build` folder.

Once that is done, we can run our script the same way we usually do, for instance:

```bash
k6 run build/simple-browser.js
```
This will execute the test in headless mode. 
To run the test in headfull mode execute this command. 
```bash
K6_BROWSER_HEADLESS=false k6 run /build/simple-browser.js
```
