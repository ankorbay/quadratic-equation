module.exports = function solveEquation(equation) {
  const solution=[];

  const firstmarker=equation.indexOf('* x^2 ',0);
  const secondmarker=equation.indexOf(' * x ',0);

  const a=parseInt(equation.slice(0,firstmarker),10);
  
  const b_str=equation.slice(firstmarker+6,secondmarker);
  const c_str=equation.slice(secondmarker+5,equation.length);

  const b=parseInt(b_str.replace(' ', ''),10);
  const c=parseInt(c_str.replace(' ', ''),10);

  const sol1=(-b+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
  const sol2=(-b-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);

  if (sol2>sol1) {
    solution.push(Math.round(sol1));
    solution.push(Math.round(sol2));
  } else {
    solution.push(Math.round(sol2));
    solution.push(Math.round(sol1));
  }

  return solution;
}