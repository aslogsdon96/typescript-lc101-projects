import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let massTotal = 0;
        for (let j = 0; j < items.length; j++) {
            massTotal = (massTotal + items[j].massKg);
        }
        return massTotal;
    }
    currentMassKg(): number {
        let currentMass = 0;
        currentMass = (this.sumMass(this.cargoItems) + this.sumMass(this.astronauts));
        return currentMass;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}