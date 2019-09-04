# Icicle

#### A JavaScript testing infrastructure, based on rspec and jasmine

**_•• Instructions ••_**

- Download the repo
- copy the 'test.js' file to your project
- copy the 'icicle-tests.html' file to your project
- copy the 'myTests.js' file to your project

In order for the tests to see the subjects, you will need to add each script to be tested in the header of the 'icicle-tests.html' file.
This should be **before** the test

###### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="scriptToTest.js" type="text/javascript"></script>
    <script src="test.js" type="text/javascript"></script>
  </head>
  <body></body>
</html>
```

## Writing tests

```JavaScript
//In the myTests.js file
//tests are written like so
var hello = describe("#Hello", function() {
  return it("Should say hello", function() {
    return expect(hello()).toEqual('Hello');
  });
});

let lines = [
  //test variable names goes here
  hello
];
```

## How to use

```bash
open icicle-test.html
```
