import { ECardRarity } from "../Card";
import { EEntityCardNature, EntityCard } from "../EntityCard";

export class FireSpirit extends EntityCard {
    constructor() {
        super("Spirit", ECardRarity.COMMON, EEntityCardNature.FIRE, "cards/fire_spirit.png", 1, 1, 20);
    }
}