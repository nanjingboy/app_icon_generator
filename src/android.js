"use strict"

const path = require("path")
const Base = require("./base")

class Android extends Base {

  static sizes() {
    return [
      { name: "ldpi", width: 36, height: 36 },
      { name: "mdpi", width: 48, height: 48 },
      { name: "hdpi", width: 72, height: 72 },
      { name: "xhdpi", width: 96, height: 96 },
      { name: "xxhdpi", width: 144, height: 144 },
      { name: "xxxhdpi", width: 192, height: 192 }
    ]
  }

  static targetPath(output, size) {
    return path.join(output, `drawable-${size.name}`, 'icon.png')
  }
}

module.exports = Android