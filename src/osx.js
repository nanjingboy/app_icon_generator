"use strict"

const Base = require("./base")

class OSX extends Base {

  static iconSizes() {
    return [
      { name: "icon_512x512@2x.png", width: 1024, height: 1024 },
      { name: "icon_512x512.png", width: 512, height: 512 },
      { name: "icon_256x256@2x.png", width: 512, height: 512 },
      { name: "icon_256x256.png", width: 256, height: 256 },
      { name: "icon_128x128@2x.png", width: 256, height: 256 },
      { name: "icon_128x128.png", width: 128, height: 128 },
      { name: "icon_32x32@2x.png", width: 64, height: 64 },
      { name: "icon_32x32.png", width: 32, height: 32 },
      { name: "icon_16x16@2x.png", width: 32, height: 32 },
      { name: "icon_16x16.png", width: 12, height: 12 }
    ]
  }
}

module.exports = OSX