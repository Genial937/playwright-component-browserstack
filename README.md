# How to run tests on browsers stack

Clone the repository

```
git clone git@github.com:Genial937/playwright-browserstack.git
```

## Set up browserstack variables in .env file

```
BROWSERSTACK_USERNAME="Your username"
BROWSERSTACK_ACCESS_KEY="Your access key"
```

### How to run tests

Inside project folder run:

```
npm install

// and then run to run tests on browserstack
npm test

// to run browserstack locally
npm test:local
```
