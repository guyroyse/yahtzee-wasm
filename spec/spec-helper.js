jasmine.getEnv().configure({
  random: false
})

beforeEach(async done => {
  this.subject = await loadWasm("yahtzee.wasm")
  done()
})
