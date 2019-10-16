describe("Yahtzee", () => {

  beforeEach(async done => {
    this.subject = await loadWasm("yahtzee.wasm")
    done()
  })

  let scenarios = [
    { fn: 'ones', rolls: [2,2,2,2,2], result: 0 },

    { fn: 'ones', rolls: [1,2,2,2,2], result: 1 },
    { fn: 'ones', rolls: [2,1,2,2,2], result: 1 },
    { fn: 'ones', rolls: [2,2,1,2,2], result: 1 },
    { fn: 'ones', rolls: [2,2,2,1,2], result: 1 },
    { fn: 'ones', rolls: [2,2,2,2,1], result: 1 },

    { fn: 'ones', rolls: [1,1,2,2,2], result: 2 },
    { fn: 'ones', rolls: [2,1,1,2,2], result: 2 },
    { fn: 'ones', rolls: [2,2,1,1,2], result: 2 },
    { fn: 'ones', rolls: [2,2,2,1,1], result: 2 },

    { fn: 'ones', rolls: [1,1,1,2,2], result: 3 },
    { fn: 'ones', rolls: [2,1,1,1,2], result: 3 },
    { fn: 'ones', rolls: [2,2,1,1,1], result: 3 },

    { fn: 'ones', rolls: [1,1,1,1,2], result: 4 },
    { fn: 'ones', rolls: [2,1,1,1,1], result: 4 },

    { fn: 'ones', rolls: [1,1,1,1,1], result: 5 },
  ]

  scenarios.forEach(scenario => {

    it(`returns '${scenario.result}' when scoring '${scenario.rolls}' for '${scenario.fn}'`, () => {
      let score = this.subject[scenario.fn](...scenario.rolls)
      expect(score).toBe(scenario.result)
    })
  
  })

})
