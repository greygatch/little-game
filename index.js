'use strict';

let healthPoints = 100;
setInterval(damageSimulation, 750);

function damageSimulation() {

  if (healthPoints > 0) {
    const damageAmt = Math.floor(Math.random() * 30);
    const roll = Math.floor(Math.random() * 10);
    if (roll >= 5) {
      healthPoints -= damageAmt;
      console.log(`Took ${damageAmt} damage.`);
    }
    const remainingHealth = healthPoints > 0 ? healthPoints : 0;
    console.log('****************');
    console.log(`Remaining Health: ${remainingHealth}%`);
    console.log('****************');
  }else{
    console.log('YOU HAVE DIED.');
    clearInterval(this);
  }

}
