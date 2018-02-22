module.exports = function solveEquation(equation) {
  var a = "", b = "", c = "", solv = [];
  var id_a = equation.indexOf("x^2"), id_b = equation.lastIndexOf("x");

  for (var i = 0; i < id_a - 3; i++)
    a += equation[i];
  
  for (var i = id_a + 4; i < id_b - 3; i++) 
    b += equation[i];

  for (var i = id_b + 2; i < equation.length; i++)
    c += equation[i];

  var c_1 = c[0], b_1 = b[0];

  for (var i = 2; i < b.length; i++)
    b_1 += b[i];

  for (var i = 2; i < c.length; i++)
    c_1 += c[i];

  var a_1 = +a; b_1 = +b_1; c_1 = +c_1;

  //Solution of equation
  var D = b_1 * b_1 - 4 * a_1 * c_1;
  x1 = (-b_1 + Math.sqrt(D))/(2 * a);
  x2 = (-b_1 - Math.sqrt(D))/(2 * a);

  solv[0] = Math.round(x1), solv[1] = Math.round(x2);

  if (solv[0] > solv[1]) {
    var boof = solv[0];
    solv[0] = solv[1];
    solv[1] = boof; 
  }

  return solv;
}