

const geometricLength = (X) => {
          return Math.sqrt(Math.pow(X.x, 2) + Math.pow(X.y, 2));
}

//https://www.mathsisfun.com/numbers/complex-numbers.html
const matMul = (X1, X2) => {
  //(a+bi)(c+di) = (ac−bd) + (ad+bc)i
  const x = X1.x * X2.x - X1.y * X2.y;
  const y = X1.x * X2.y + X1.y * X2.x;
  return { x: x, y: y }
}

//Power to 2 (square)
const matPow2 = (X1) => {
  //(a+bi)(c+di) = (ac−bd) + (ad+bc)i
  const x = Math.pow(X1.x, 2) - Math.pow(X1.y, 2);
  const y = 2 * X1.x * X1.y;
  return { x: x, y: y }
}

const matAdd = (X1, X2) => {
  const x = X1.x + X2.x;
  const y = X1.y + X2.y;
  return { x: x, y: y }
}

const matConjugate = (X) => {
  return {x: X.x, y: -1 * X.y};
}

const matDivision = (X1, X2) => {
  const top  = matMul(X1, X2);
  const bottom = Math.pow(X2.x, 2) + Math.pow(X2.y, 2);
  return {x:top.x / bottom, y:top.y / bottom};
}

