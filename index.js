'use strict';

let healthPoints = 100;
setInterval(damageSimulation, 500);

function damageSimulation() {

  if (healthPoints > 0) {
    const roll = Math.floor(Math.random() * 10);

    if (roll >= 5) {
      const damageAmt = Math.floor(Math.random() * 30);
      const elementalTypes = ['Fire', 'Water', 'Earth'];
      const elementalRoll = Math.floor(Math.random() * elementalTypes.length);
      const selectedElement = elementalTypes[elementalRoll];


      const elementalDmg = parseFloat(.1 * damageAmt).toPrecision(2);
      const totalDmg = parseFloat(damageAmt + elementalDmg).toPrecision(2);
      console.log('TOTAL:', totalDmg);

      healthPoints -= totalDmg;
      console.log(`TAKING ${damageAmt} POINTS OF DAMAGE AND ${elementalDmg} POINTS OF ${selectedElement} DAMAGE`);
    }
    const remainingHealth = healthPoints > 0 ? healthPoints : 0;
    console.log('****************');
    console.log(`Remaining Health: ${remainingHealth}%`);
    console.log('****************');
  } else {
    console.log('YOU HAVE DIED.');
    clearInterval(this);
  }

}
