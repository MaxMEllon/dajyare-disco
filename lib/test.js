const Dajare = require('./dajyare')

const test1 = () => {
  const dajare = new Dajare('千代子のチョコ')

  dajare
    .isDajareAsync()
    .then(res => console.log(`${res} YO!`))
}

test1()
