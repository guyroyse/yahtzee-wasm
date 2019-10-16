jasmine.getEnv().configure({
  random: false
})

beforeEach(async done => {
  this.subject = await loadWasm("yahtzee.wasm")
  done()
})


function runScenario(scenario, fn) {
  it(`returns '${scenario.result}' when scoring '${scenario.rolls}'`, () => {
    let score = this.subject[fn](...scenario.rolls)
    expect(score).toBe(scenario.result)
  })
}