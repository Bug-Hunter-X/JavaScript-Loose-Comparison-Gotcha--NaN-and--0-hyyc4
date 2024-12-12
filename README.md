# JavaScript Loose Comparison Gotcha: NaN and -0

This repository demonstrates a subtle but important quirk in JavaScript's loose comparison (`==`) operator. Specifically, it highlights the unexpected behavior when comparing `NaN` (Not a Number) and `-0` (negative zero).

## The Problem

JavaScript's `==` operator does not follow the standard mathematical rules of equality in all cases.  Most notably:

* `NaN == NaN` evaluates to `false`.  This is counterintuitive since a value should equal itself.
* `0 == -0` evaluates to `true`.  While mathematically equivalent, JavaScript considers them distinct.

The example `bug.js` shows how this can lead to incorrect results in simple comparison functions.

## The Solution

For strict equality checks, use the strict equality operator (`===`).  This operator avoids type coercion and behaves more predictably.

The example `bugSolution.js` demonstrates the corrected code using the `===` operator.