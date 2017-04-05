"use strict"

const path = require("path")
const sharp = require("sharp")
const colors = require("colors")
const mkdirp = require("mkdirp")

class Base {

  static icon(input, output) {
    this.iconSizes().forEach((size) => {
      let targetPath = this.iconTargetPath(output, size)
      this.mkdir(targetPath, () => {
        this.resize(input, targetPath, size.width, size.height)
      })
    })
  }

  static iconSizes() {
    return []
  }

  static iconTargetPath(output, size) {
    return path.join(output, size.name)
  }

  static splash(input, output) {
    this.splashSizes().forEach((size) => {
      let targetPath = this.splashTargetPath(output, size)
      this.mkdir(targetPath, () => {
        this.resize(input, targetPath, size.width, size.height)
      })
    })
  }

  static splashSizes() {
    return []
  }

  static splashTargetPath(output, size) {
    return path.join(output, size.name)
  }

  static mkdir(targetPath, callback) {
    mkdirp(path.dirname(targetPath), (error, info) => {
      if (error) {
        console.log(`[${"Error".red}] Generate ${targetPath}`)
      } else {
        callback()
      }
    })
  }

  static resize(sourcePath, targetPath, width, height) {
    sharp(sourcePath)
      .rotate()
      .resize(width, height)
      .toFile(targetPath, (error, info) => {
        if (error) {
          console.log(`[${"Error".red}] Generate ${targetPath}`)
        } else {
          console.log(`[${"Info".green}] Generate ${targetPath}`)
        }
      })
  }
}

module.exports = Base