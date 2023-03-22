# test-template-playwright

This repository serves as a template for working with `"playwright"`

All modules with tests are placed in the `"tests"` folder

## Running all tests

```
 npx playwright test
```

## Running a single text file

```
npx playwright test landing-page.spec.ts
```

## Run a set of test files

```
npx playwright test tests/todo-page/ tests/landing-page/
```

## Run files that have landing or login in the file name

```
npx playwright test landing login
```

## Run the test with the title

```
npx playwright test -g "add a todo item"
```

## Running tests in headed mode

```
npx playwright test landing-page.spec.ts --headed
```

## Running tests on a specific project

```
npx playwright test landing-page.ts --project=chromium
```

## View the report

```
npx playwright show-report
```

If the test failed, the report will automatically open in your browser where you can see at what stage the error occurred, as well as a screen of the last successful test

## Example

![Image alt](https://github.com/artemkuskin/eslint-plugin-architector/blob/tsTest/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%D0%BE%D1%82%202023-03-22%2015-28-53.png)
