const candidates = [
  ["Name","Health","Damage"],
  ["Tom Cruise",136,6],
  ["Sponge Bob",110,4],
  ["James Earl Jones",175,8],
  ["Bob Barker",112,2],
  ["Tonya Harding",108,7],
  ["Charles Barkley",220,12],
  ["Peter Piper",116,4],
  ["Harry Potter",96,16],
  ["Shamu",280,24],
  ["Bill Gates",124,6],
  ];


const candidatesTraits = candidates.slice(1).map(candidate => ({
  name: candidate[0],
  health: candidate[1],
  currentHealth: candidate[1],
  damage: candidate[2],
  countWins: 0,
}));
  

const selectCandidates = () => {
    let candidate1 = candidatesTraits[Math.floor(Math.random()*candidatesTraits.length)];
    removeDuplicateCandidate(candidate1);
    let candidate2 = candidatesTraits[Math.floor(Math.random()*candidatesTraits.length)];
      
    return [candidate1, candidate2];
  }

  const removeDuplicateCandidate = (candidate) => {
      let candidateIndex = candidates.indexOf(candidate);
      if(candidateIndex === candidate) {
        candidatesTraits.splice(candidateIndex, 1);
      }
    }

const applicantWars = (candidate1, candidate2) => {
  let currentSlapper = candidate1;
  while (candidate1.currentHealth > 0 && candidate2.currentHealth > 0) {
    if(currentSlapper === candidate1) {
      candidate2.currentHealth -= candidate1.damage;
      currentSlapper = candidate2;
    } else {
        candidate1.currentHealth -= candidate2.damage;
        currentSlapper = candidate1;
      } 
  }
  

  if (candidate1.currentHealth > candidate2.currentHealth) {
    candidate1.countWins += 1;
  } else {
    candidate2.countWins += 1;
  }
  candidate1.currentHealth = candidate1.health;
  candidate2.currentHealth = candidate2.health;
  }
 

const sortCandidates = () => {
  candidatesTraits.sort((a, b) => {
    return b.countWins - a.countWins;
  })
}


for(var i = 0; i < 100; i++) {
  applicantWars(...selectCandidates());
}


sortCandidates();
console.log(candidatesTraits);  
