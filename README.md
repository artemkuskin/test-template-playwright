# test-template-playwright

This repository serves as a template for working with `"playwright"`

All modules with tests are placed in the `"tests"` folder

If the test failed, the report will automatically open in your browser where you can see at what stage the error occurred, as well as a screen of the last successful test

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
