function generateRandomNumber(num) {
   
    return Math.floor(Math.random() * num)
  }
  const mountainbikemodes = {
   kinds: ['mtb', 'bmx', 'race', 'freestyle'],
   places: ['highway', 'mountain', 'streets', 'race'],
   encouragementwords: ['you can ride savage', 'you can run on the rocks', 'let win that race', 'go on the time'],
  }
  let encourage = []

  for(let prop in mountainbikemodes) {
    let optionIdx = generateRandomNumber(mountainbikemodes[prop].length)
    switch(prop) {
      case 'typebike':
        encourage.push(`Your kind of bike could be "${mountainbikemodes[prop][optionIdx]}".`)
        break
      case 'guessbike':
        encourage.push(`You are having a: ${mountainbikemodes[prop][optionIdx]}.`)
        break
      case 'message':
        encourage.push(`I say that: "${mountainbikemodes[prop][optionIdx]}".`)
        break
      default:
        encourage.push('There is not enough info.')
    }
  }

  function bikesport(encourage) {
   
    const formatted = encourage.join('\n')
    console.log(formatted)
  }
  
  bikesport(encourage);