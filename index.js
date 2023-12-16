const utf_8_to_utf_16 = function(input, output) {
  let code_point
  let i
  let j
  let is_valid = true

  if (input.length != 0) {
    i = 0
    j = 0

    while (
      is_valid == true &&
      i != input.length
    ) {
      if (
        input[i] > 127 &&
        input[i] < 247
      ) {
        i++

        if (
          i != input.length &&
          input[i] > 127 &&
          input[i] < 192
        ) {
          if (input[i - 1] > 223) {
            i++

            if (
              i != input.length &&
              input[i] > 127 &&
              input[i] < 192
            ) {
              if (
                input[i - 2] != 237 ||
                input[i - 1] < 160
              ) {
                if (input[i - 2] > 239) {
                  i++

                  if (
                    (
                      input[i - 3] < 244 ||
                      (
                        input[i - 3] == 244 &&
                        input[i - 2] < 144
                      )
                    ) &&
                    (
                      i != input.length &&
                      input[i] > 127 &&
                      input[i] < 192
                    )
                  ) {
                    code_point = (((input[i - 3] & 7) << 18) + ((input[i - 2] & 63) << 12) + ((input[i - 1] & 63) << 6) + (input[i] & 63)) - 65536
                    output[j] = (code_point >> 10) + 55296
                    j++
                    output[j] = (code_point & 1023) + 56320
                  } else {
                    is_valid = false
                  }
                } else {
                  output[j] = ((input[i - 2] & 15) << 12) + ((input[i - 1] & 63) << 6) + (input[i] & 63)
                }
              } else {
                if (input[i - 1] < 176) {
                  output[j] = ((input[i - 2] & 15) << 12) + ((input[i - 1] & 63) << 6) + (input[i] & 63)
                  i++
                  j++

                  if (
                    i != input.length &&
                    input[i] == 237
                  ) {
                    i++

                    if (
                      i != input.length &&
                      input[i] > 175 &&
                      input[i] < 192
                    ) {
                      i++

                      if (
                        i != input.length &&
                        input[i] > 127 &&
                        input[i] < 192
                      ) {
                        output[j] = ((input[i - 2] & 15) << 12) + ((input[i - 1] & 63) << 6) + (input[i] & 63)
                      } else {
                        is_valid = false
                      }
                    } else {
                      is_valid = false
                    }
                  } else {
                    is_valid = false
                  }
                } else {
                  is_valid = false
                }
              }
            } else {
              is_valid = false
            }
          } else {
            output[j] = ((input[i - 1] & 31) << 6) + (input[i] & 63)
          }
        } else {
          is_valid = false
        }
      } else {
        if (input[i] < 128) {
          output[j] = input[i]
        } else {
          is_valid = false
        }
      }

      i++
      j++
    }
  }

  return is_valid
}

if (
  typeof module != "undefined" &&
  typeof module.exports != "undefined"
) {
  module.exports = utf_8_to_utf_16
}
