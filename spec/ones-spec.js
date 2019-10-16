describe("ones", () => {

  let ones = [
    { rolls: [2,2,2,2,2], result: 0 },

    { rolls: [1,2,2,2,2], result: 1 },
    { rolls: [2,1,2,2,2], result: 1 },
    { rolls: [2,2,1,2,2], result: 1 },
    { rolls: [2,2,2,1,2], result: 1 },
    { rolls: [2,2,2,2,1], result: 1 },

    { rolls: [1,1,2,2,2], result: 2 },
    { rolls: [2,1,1,2,2], result: 2 },
    { rolls: [2,2,1,1,2], result: 2 },
    { rolls: [2,2,2,1,1], result: 2 },

    { rolls: [1,1,1,2,2], result: 3 },
    { rolls: [2,1,1,1,2], result: 3 },
    { rolls: [2,2,1,1,1], result: 3 },

    { rolls: [1,1,1,1,2], result: 4 },
    { rolls: [2,1,1,1,1], result: 4 },

    { rolls: [1,1,1,1,1], result: 5 },
  ]

  ones.forEach(scenario => runScenario(scenario, 'ones'))

})
