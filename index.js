export class War {
  constructor(props) {

  }

  beginWarSimulation() {
    this.constructFighters().forEach((country, i) => {
      console.log(`BEGINNING ROUND FOR ${country.name.toUpperCase()}`);
      this.damageSimulation(country);
    })
  }

  constructFighters() {
    const fightersArray = [
      {
        name: 'Texas Red',
        healthPoints: 100
      },
      {
        name: 'Ranger',
        healthPoints: 75
      }
    ];
    return fightersArray;
  }

  damageSimulation(obj) {
    let healthPoints = obj.healthPoints;

    while (healthPoints > 0) {
      const roll = Math.floor(Math.random() * 10);

      if (roll >= 5) {
        const damageAmt = Math.floor(Math.random() * 30);
        const elementalTypes = ['Fire', 'Water', 'Earth'];
        const elementalRoll = Math.floor(Math.random() * elementalTypes.length);
        const selectedElement = elementalTypes[elementalRoll];


        const elementalDmg = parseFloat(.1 * (damageAmt * 2));
        const totalDmg = parseFloat(damageAmt + elementalDmg);
        console.log('TOTAL:', totalDmg);

        healthPoints -= totalDmg;
        console.log(`TAKING ${damageAmt} POINTS OF DAMAGE AND ${elementalDmg.toFixed(2)} POINTS OF ${selectedElement.toUpperCase()} DAMAGE`);
      }
      const remainingHealth = healthPoints > 0 ? healthPoints : 0;
      console.log('****************');
      console.log(`Remaining Health for ${obj.name.toUpperCase()}: ${remainingHealth.toFixed(2)}%`);
      console.log('****************');
    }
    console.log('YOU HAVE DIED.');

  }
}

const Battle = new War();
Battle.beginWarSimulation();
