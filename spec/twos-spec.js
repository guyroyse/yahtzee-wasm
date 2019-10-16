describe("twos", () => {

  let twos = [
    { rolls: [3,3,3,3,3], result: 0 },

    { rolls: [2,3,3,3,3], result: 2 },
    { rolls: [3,2,3,3,3], result: 2 },
    { rolls: [3,3,2,3,3], result: 2 },
    { rolls: [3,3,3,2,3], result: 2 },
    { rolls: [3,3,3,3,2], result: 2 },

    { rolls: [2,2,3,3,3], result: 4 },
    { rolls: [3,2,2,3,3], result: 4 },
    { rolls: [3,3,2,2,3], result: 4 },
    { rolls: [3,3,3,2,2], result: 4 },

    { rolls: [2,2,2,3,3], result: 6 },
    { rolls: [3,2,2,2,3], result: 6 },
    { rolls: [3,3,2,2,2], result: 6 },

    { rolls: [2,2,2,2,3], result: 8 },
    { rolls: [3,2,2,2,2], result: 8 },

    { rolls: [2,2,2,2,2], result: 10 },
  ]

  twos.forEach(scenario => {
    it(`returns '${scenario.result}' when scoring '${scenario.rolls}'`, () => {
      let score = this.subject.twos(...scenario.rolls)
      expect(score).toBe(scenario.result)
    })
  })
})
