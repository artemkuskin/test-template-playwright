# test-template-playwright

This repository serves as a template for working with `"playwright"`

All modules with tests are placed in the `"tests"` folder

## creating a test using `Codegen`

```
npx playwright codegen "URL"
```

## Running all tests

```
 npx playwright test
```

## Running a single text file

```
npx playwright test links.spec.ts
```

## Run a set of test files

```
npx playwright test tests/links.spec.ts tests/search.spec.ts
```

## Run files that have landing or login in the file name

```
npx playwright test landing login
```

## Run the test with the title

```
npx playwright test -g "test search"
```

## Running tests in headed mode

```
npx playwright test links.spec.ts --headed
```

## Running tests on a specific project

```
npx playwright test landing-page.ts --project=chromium
```

# Debugging tests

## Debugging all tests

```
npx playwright test --debug
```

## Debugging one test file

```
npx playwright test search.spec.ts --debug
```

## View the report

```
npx playwright show-report
```

If the test failed, the report will automatically open in your browser where you can see at what stage the error occurred, as well as a screen of the last successful test

## Example

![Image alt](https://github.com/artemkuskin/eslint-plugin-architector/blob/tsTest/image/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%20%D0%BE%D1%82%202023-03-22%2015-28-53.png)
