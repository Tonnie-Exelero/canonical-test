/**
 * Calculates the result of the given expression.
 *
 * @param {string} expression The expression to be evaluated.
 * @returns {number} The result of the expression.
 */
exports.calculate = function (expression) {
  // Split the expression into items
  let items = expression.split(" ");

  // Reverse the items to simplify processing
  items.reverse();

  // Define a stack to hold operands
  let stack = [];

  // Process each item
  items.forEach((item) => {
    if (!isNaN(item)) {
      // If the item is a number, push it onto the stack
      stack.push(parseFloat(item));
    } else {
      // If the item is an operator, pop the top two operands from the stack,
      // apply the operator, and push the result back onto the stack
      let a = stack.pop();
      let b = stack.pop();
      switch (item) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error("Invalid operator: " + item);
      }
    }
  });

  // The final result is the only element remaining on the stack
  return stack.pop();
};
