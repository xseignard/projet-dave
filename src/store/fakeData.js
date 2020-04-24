import faker from 'faker'

const MAX_STEPS = 20
const MAX_TRIGGERS = 10

const fakeTriggers = Array(MAX_TRIGGERS)
  .fill(0)
  .map(() => faker.hacker.verb())

export const createTriggers = () => fakeTriggers

const randomInt = (min, max, exclude) => {
  let currentPick = Math.floor(Math.random() * (max - min + 1)) + min
  if (exclude) {
    while (currentPick === exclude) {
      currentPick = Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
  return currentPick
}

const step = id => {
  const actions = Array(randomInt(4, 8))
    .fill(0)
    .map(() => {
      return {
        text: faker.company.bs(),
        target: randomInt(0, MAX_STEPS - 1, id),
        triggers: Array(randomInt(0, 3))
          .fill(0)
          .map(() => fakeTriggers[randomInt(0, MAX_TRIGGERS - 1)]),
      }
    })

  return {
    id: id,
    text: faker.lorem.sentence(),
    actions,
  }
}

export const createSteps = () => {
  return Array(MAX_STEPS)
    .fill(0)
    .map((_, i) => step(i))
}
