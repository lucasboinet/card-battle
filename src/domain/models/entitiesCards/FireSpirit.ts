import { ECardRarity } from "../Card";
import { EEntityCardNature, EntityCard, EntityCardSpell } from "../EntityCard";
import { SimpleCardEffect } from "../CardEffect";

export class FireSpirit extends EntityCard {
    constructor() {
        super("Spirit", ECardRarity.COMMON, EEntityCardNature.FIRE, "cards/fire_spirit.png", 1, 1, 30);
    }

    get spells(): EntityCardSpell[] {
        return [
            { 'name': 'Fireball', cost: 2, effect: new SimpleCardEffect(30) }
        ]
    }
}