var morphShape = document.querySelector(".morph-svg");
var d = 2500
var morphing = anime({
  targets: morphShape,
  d: [
    {
      value:
        "M 79.46 179.41 C 76.73 124.29 110.31 53.65 171.68 57.12 C 222.63 60.6 263.16 96.49 295.59 138.18 C 319.9 172.92 331.48 215.77 307.17 253.98 C 282.86 292.19 248.11 315.35 209.9 335 C 160.1 359.32 110.31 316.47 95.71 270.5 C 84.64 244.21 79 213.46 79.46 179.41 Z",
        duration: 0
    },
    {
      value:
        "M 66 111 C 111 70 204 59 248 58 C 292 57 326 88 344 130 C 362 172 319.17 245 308 260 C 296.83 275 260 316 193 320 C 126 324 78 303 58 252 C 38 201 25.65 147.77 66 111 Z ",
        duration: d
    },
    {
      value:
        "M 137 155 C 176 96 205 59 249 58 C 293 57 342 49 354 105 C 366 161 315.48 216 295 257 C 274 299 251.13 322.85 188 332 C 119 342 65 322 45 279 C 16.13 216.94 103.07 206.32 137 155 Z ",
        duration: d*2
    },
    {
      value:
        "M 74 178 C 86 122 138.13 77.52 220 76 C 274 75 285 101 309 146 C 330.46 186.24 338 221 317 267 C 298.19 308.2 242.69 338 200 343 C 149 349 123 327 100 288 C 83.08 259.32 66.86 211.3 74 178 Z ",
        duration: d
    },
    {
      value:
        "M 57 81 C 92 41 158.7 50.79 200 66 C 238 80 256 100 276 150 C 297.27 203.18 352 244 335 276 C 312.09 319.12 284 337 229 346 C 160.19 357.26 116.81 314 93 273 C 57 211 16.49 127.3 57 81 Z",
        duration: d
    },
    { // same the first 
      value:
      "M 79.46 179.41 C 76.73 124.29 110.31 53.65 171.68 57.12 C 222.63 60.6 263.16 96.49 295.59 138.18 C 319.9 172.92 331.48 215.77 307.17 253.98 C 282.86 292.19 248.11 315.35 209.9 335 C 160.1 359.32 110.31 316.47 95.71 270.5 C 84.64 244.21 79 213.46 79.46 179.41 Z",
      duration: d
    },
  ],
  easing: "easeInOutQuad",
  //duration: d*4,
  //elasticity: 2000,
  loop: true
});


