"use strict"

const Base = require("./base")

class IOS extends Base {

  static iconSizes() {
    return [
      { name: "icon-60@3x.png", width: 180, height: 180 },
      { name: "icon-60.png", width: 60, height: 60 },
      { name: "icon-60@2x.png", width: 120, height: 120 },
      { name: "icon-76.png", width: 76, height: 76 },
      { name: "icon-76@2x.png", width: 152, height: 152 },
      { name: "icon-40.png", width: 40, height: 40 },
      { name: "icon-40@2x.png", width: 80, height: 80 },
      { name: "icon.png", width: 57, height: 57 },
      { name: "icon@2x.png", width: 114, height: 114 },
      { name: "icon-72.png", width: 72, height: 72 },
      { name: "icon-72@2x.png", width: 144, height: 144 },
      { name: "icon-small.png", width: 29, height: 29 },
      { name: "icon-small@2x.png", width: 58, height: 58 },
      { name: "icon-50.png", width: 50, height: 50 },
      { name: "icon-50@2x.png", width: 100, height: 100 },
      { name: "icon-83.5@2x.png", width: 167, height: 167 }
    ]
  }
}

module.exports = IOS