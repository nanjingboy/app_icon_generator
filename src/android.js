"use strict"

const path = require("path")
const Base = require("./base")

class Android extends Base {

  static iconSizes() {
    return [
      { name: "ldpi", width: 36, height: 36 },
      { name: "mdpi", width: 48, height: 48 },
      { name: "hdpi", width: 72, height: 72 },
      { name: "xhdpi", width: 96, height: 96 },
      { name: "xxhdpi", width: 144, height: 144 },
      { name: "xxxhdpi", width: 192, height: 192 }
    ]
  }

  static iconTargetPath(output, size) {
    return path.join(output, `drawable-${size.name}`, 'icon.png')
  }

  static splashSizes() {
    return [
      { name: "ldpi", width: 200, height: 320 },
      { name: "mdpi", width: 320, height: 480 },
      { name: "hdpi", width: 480, height: 800 },
      { name: "xhdpi", width: 720, height: 1280 },
      { name: "xxhdpi", width: 960, height: 1600 },
      { name: "xxxhdpi", width: 1280, height: 1920 }
    ]
  }

  static splashTargetPath(output, size) {
    return path.join(output, `drawable-${size.name}`, 'screen.png')
  }
}

module.exports = Android