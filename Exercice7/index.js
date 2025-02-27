function convertToBinary() {
  const input = document.getElementById("decimalInput");

  let decimal = input.value;

  if (isNaN(decimal)) {
    console.log("Please enter a valid number.");
  }

  const p = document.getElementById("binaryResult");
  let binary = "";

  while (decimal > 0) {
    let stockBinary = decimal % 2;
    decimal = Math.floor(decimal / 2);
    binary += stockBinary;
  }

  p.innerText = binary.split("").reverse().join("");
}
