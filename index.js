var healthPoints = 100;
setInterval(damageSimulation, 750);

function damageSimulation(){
  const damageAmt = Math.floor(Math.random() * 20);
  const roll = Math.floor(Math.random() * 10);
  if(healthPoints <= 0){
    clearInterval(this);
    return;
  }
  console.log('****************');
  if (roll > 5) {
    healthPoints -= damageAmt;
    console.log('HIT!', `${damageAmt}: points`);
  }

  const remainingHealth = healthPoints > 0 ? healthPoints : 0;
  console.log('Remaining Health:', remainingHealth);
  console.log('****************');
}
