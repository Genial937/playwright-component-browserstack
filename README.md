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
yarn install

// and then run to run tests on browserstack
yarn test hello

// to run browserstack locally
yarn test:local hello

// run playwright component test without browserstack
yarn test-ct ButtonTwoTest
yarn test-ct ButtonTwoTest --debug

// run playwright component test with browserstack
yarn test-ct:local ButtonOneTest
```
