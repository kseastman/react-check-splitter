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

### What's Already Here

This app is a partially implemented check splitter. It will take a subtotal, tax and tip percentages, and a number of ways to split the bill, and tell you how much each person should pay.

Read through the existing code, and answer the following questions:
- Are there any functional stateless components in this code?
- Are there any container components in this code?
- Is `CheckForm` a controlled or uncontrolled form?
  - If it's controlled, where does the state live?
- What does `CheckForm.buildInput()` do? How is it used?
  - Could `buildInput()` be a separate functional stateless component? How would this be different? Why do you think we chose not to build it this way?
