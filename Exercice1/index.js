//votre code ici

function pairNumbers(x, y) {
  let result = [];

  if (typeof x === "string" && typeof y === "string") {
    x = parseInt(x);
    y = parseInt(y);
  }

  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result.join(",");
}

export default pairNumbers;
