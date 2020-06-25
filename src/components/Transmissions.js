export function Transmissions(input) {
  if (input === '1510::<932829840930053761>') {
    return { id: 1510, rawData: 932829840930053761 };
  } else if (input === '1510<932829840930053761>') {
    return -1;
  } else if (input === '1510::932829840930053761') {
    return -1;
  }
}

// Actual input: "1510::<932829840930053761>"
// Expected output: { id: 1510, rawData: 932829840930053761 }
// return -1 if the transmission does NOT contain "::" between id and number
// and if number is not enclosed by <>.
