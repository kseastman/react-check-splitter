# Check Splitter

## Learning Goals

- Practice with stateless functional components
- Practice with container components

## Instructions

### Setup

```
$ git clone <paste-URI-here>
$ cd react-check-splitter
$ npm install
$ npm start
```

### Wave 1: Reading Code

This app is a partially implemented check splitter. It will take a subtotal, tax and tip percentages, and a number of ways to split the bill, and tell you how much each person should pay.

Read through the existing code, and answer the following questions:
- Are there any functional stateless components in this code?
  - What do they display?
- Are there any container components in this code?
  - What state do they manage?
- Is `CheckForm` a controlled or uncontrolled form?
  - If it's controlled, where does the state live?
- What happens when you type in one of the input boxes?
  - What components (if any) are re-rendered?
- What does `CheckForm.buildInput()` do? How is it used?
  - Could `buildInput()` be a separate functional stateless component? How would this be different? Why do you think we chose not to build it this way?

Pay careful attention to the last question - when learning a new pattern, it's important to identify when it _doesn't_ apply too.

### Wave 2: Managing State in a Container Component

Let's start by doing some work with this app's container component, `CheckSplitterContainer`. Currently all this component does is manage the form state, but for this app we'll need a little more.

Take a look at the `calculateSplit()` function. Your first job is to fill this out. Based on the numbers the user has typed into the form, figure out the tax amount, tip amount, total price with tax and tip, and price per head after splitting. You should return all 4 numbers in one object (like it is now).

### Wave 3: Displaying Data with a Functional Stateless Component

Our next step is to use the 
