import { ECardRarity } from "../Card";
import { EEntityCardNature, EntityCard, EntityCardSpell } from "../EntityCard";
import { SelfHealCardEffect } from "../CardEffect";

export class Trean extends EntityCard {
    constructor() {
        super("Trean", ECardRarity.RARE, EEntityCardNature.PLANT, "cards/trean.png", 1, 3, 50);
    }

    get spells(): EntityCardSpell[] {
        return [
            { 'name': 'Life steal', cost: 4, effect: new SelfHealCardEffect(10, 20, "Gain 20 health after each attack") }
        ]
    }
}