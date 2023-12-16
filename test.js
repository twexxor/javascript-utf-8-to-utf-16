const utf_8_to_utf_16 = require("./index.js")
const input = [0xE2, 0x9D, 0xA4, 0xEF, 0xB8, 0x8F, 0x01, 0x02, 0x03, 0xC2, 0xA9]
const output = []

if (utf_8_to_utf_16(input, output) == true) {
  console.log(output)
} else {
  console.log("invalid")
}
