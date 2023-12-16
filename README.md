# UTF-8 to UTF-16
## Description
Convert UTF-8 to UTF-16 encoding for an array of numbers client-side in the browser and server-side in Node.js.

## Code Example
The following code demonstrates an example implementation in Node.js with the test.js file included in this package.

``` javascript
const utf_8_to_utf_16 = require("./index.js")
const input = [0xE2, 0x9D, 0xA4, 0xEF, 0xB8, 0x8F, 0x01, 0x02, 0x03, 0xC2, 0xA9]
const output = []

if (utf_8_to_utf_16(input, output) == true) {
  console.log(output)
} else {
  console.log("invalid")
}
```

To run the code example in Node.js, execute the following command.

``` console
node test
```

## Purchase
[EntroCraft](https://entrocraft.com/) maintains this open-source package with the permissive MIT license.

It's provided as a convenient evaluation tool for the [premium UTF-8 to UTF-16 library written in C](https://entrocraft.com/dungeon/character-encoding-algorithms/utf-8-to-utf-16/).

Converting code in this package from JavaScript to C is discouraged and subject to [purchasing a license](https://entrocraft.com/dungeon/character-encoding-algorithms/utf-8-to-utf-16/#license) for the premium library in C.

Developers who don't use the C programming language can still [purchase credits](https://entrocraft.com/pricing/) and learn C to become better JavaScript developers and support package maintenance.
