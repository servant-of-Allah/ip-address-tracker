function decode(encoded) {
    let decoded = "";
    for (let i = 0; i < encoded.length; i += 8) {
      let byte = encoded.substr(i, 8);
      decoded += String.fromCharCode(parseInt(byte, 2));
    }
    return decoded;
  }

const fetch_from_here = `https://geo.ipify.org/api/v2/country,city?apiKey=${decode('0110000101110100010111110011001101001011010001010101010100110001010110010110111101000011010010000111010100110011010011000110010101110011011011100100010101010000010100100101001001010111011010100111101001111001011011010101000001111000011100010100010101010001')}&`;

export {fetch_from_here as au};