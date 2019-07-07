---
layout: blog-post
title: FizzBuzz in Swift
date: "2017-03-02 05:30"

---

## `3='Fizz' 5='Buzz' 15='FizzBuzz'`

FizzBuzz is a classic engineering interview problem. All software engineers should know a solution to this problem. Here's why you should know it and be able to solve it.

FizzBuzz is often used to quickly filter out candidates from the interview process and evaluate initial reasoning skills. If you fail to solve FizzBuzz, the odds are going to be against you progressing further.

### The problem

The [FizzBuzz problem](https://en.wikipedia.org/wiki/Fizz_buzz) will usually look something like this:

>Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

### Breaking down the problem into subproblems

By reading the problem, we can deduce that there are four different cases to solve, three of which require the test: "Is `X` a multiple of `Y`".

#### The multiples problem

3/4 cases require a solution to the problem: "Is `X` a multiple of `Y`".

This is solved using the modulo operator `%`.

```pseudocode
If X modulo Y equals 0, then Y is a multiple of X.
```

#### Sub problems

1. Print `n` when it is __not a multiple of 3 *or* 5__.
2. Print __"Fizz"__ when `n` is a __multiple of 3 *but not* 5__.

    ```swift
    n % 3 == 0
    ```

3. Print __"Buzz"__ when `n` is a __multiple of 5 *but not* 3__

    ```swift
    n % 5 == 0
    ```

4. Print __"FizzBuzz"__ when `n` is a __multiple of both 5 *and* 3__

    ```swift
    n % 3 == 0 && n % 5 == 0
    ```

### Complete Solution

Based upon our understanding of the problem, we can create some test cases. This will validate our solution as we build it.

#### Test cases

```swift
func testThatFactorsOfThreeOutputFizz() {
    XCTAssertEquals(FizzBuzz(3), "Fizz")
    XCTAssertEquals(FizzBuzz(6), "Fizz")
    XCTAssertEquals(FizzBuzz(9), "Fizz")
}

func testThatFactorsOfFiveOutputBuzz() {
    XCTAssertEquals(FizzBuzz(5), "Buzz")
    XCTAssertEquals(FizzBuzz(10), "Buzz")
    XCTAssertEquals(FizzBuzz(20), "Buzz")
}

func testThatFactorsOfFiveAndThreeOutputFizzBuzz() {
    XCTAssertEquals(FizzBuzz(15), "FizzBuzz")
    XCTAssertEquals(FizzBuzz(30), "FizzBuzz")
}

func testThatNumbersThatAreNotFactorsOfThreeOrFiveOutputThemselves() {
    XCTAssertEquals(FizzBuzz(1), "1")
    XCTAssertEquals(FizzBuzz(2), "2")
    XCTAssertEquals(FizzBuzz(7), "7")
}

func testMaxAndMinBoundaries() {
    XCTAssertEquals(FizzBuzz(1), "1")
    XCTAssertEquals(FizzBuzz(100), "Buzz")
}
```

#### Implementation

Here is a solution to FizzBuzz in Swift.

By returning a `String` from the `FizzBuzz(:)` function, rather than printing to console from within, the function becomes testable.  

```swift
func FizzBuzz(i: Int) -> String {
    if i % 3 == 0 && i % 5 == 0 {
        return "FizzBuzz"
    } else if i % 3 == 0 {
        return "Fizz"
    } else if i % 5 == 0 {
        return "Buzz"
    } else {
        return "\(i)"
    }
}

for i in 1...100 {
    print(FizzBuzz(i))
}
```
