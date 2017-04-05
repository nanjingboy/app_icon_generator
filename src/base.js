"use strict"

const path = require("path")
const sharp = require("sharp")
const colors = require("colors")
const mkdirp = require("mkdirp")

class Base {

  static icon(input, output) {
    this.sizes().forEach((size) => {
      let target = this.targetPath(output, size)
      this.mkdir(target, () => {
        this.resize(input, target, size.width, size.height)
      })
    })
  }

  static sizes() {
    return []
  }

  static targetPath(output, size) {
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