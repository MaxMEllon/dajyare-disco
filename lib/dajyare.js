const { writeFile } = require('fs')
const { exec } = require('child_process');

function writeAsync(content) {
  return new Promise((resolve, reject) => {
    writeFile(`${__dirname}/dajyare.txt`, content, err => {
      if (err) reject(err)
      resolve(true)
    })
  })
}

function execAsync(cmd) {
  return new Promise((resolve, reject) => {
    exec(`${cmd} ${__dirname}/dajyare.txt`, (err, stdout, stderr) => {
      if (stdout === '') reject(false)
      resolve(stdout)
    })
  })
}

class Dajare {
  constructor(text, runner = 'dajarep') {
    this.text = text
    this.runner = runner
  }

  async writeToTmpFile() {
    await writeAsync(this.text)
  }

  async execJudgeDajareAsync() {
    await this.writeToTmpFile()
    return await execAsync(this.runner)
  }

  async isDajareAsync() {
    try {
      const result = await this.execJudgeDajareAsync()
      return result.trim()
    } catch(_) {
      throw new Error('is not dajyare')
    }
  }
}

module.exports = Dajare
