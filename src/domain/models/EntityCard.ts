import { Card, ECardRarity } from "./Card";
import { CardEffect } from "./CardEffect";

export interface EntityCardSpell {
    name: string;
    cost: number;
    effect: CardEffect;
}

export enum EEntityCardNature {
    FIRE = 'fire',
    WATER = 'water',
    PLANT = 'plant',
    ELECTRIC = 'electric',
    EARTH = 'earth',
}

export type TEntityCardNatureColorEnum = Record<EEntityCardNature, string>;

export const EntityCardNatureColor: TEntityCardNatureColorEnum = {
    [EEntityCardNature.FIRE]: 'rgb(254, 202, 202)',
    [EEntityCardNature.WATER]: 'rgb(255, 220, 220)',
    [EEntityCardNature.PLANT]: 'rgb(81, 173, 85)',
    [EEntityCardNature.ELECTRIC]: 'rgb(255, 220, 220)',
    [EEntityCardNature.EARTH]: 'rgb(255, 220, 220)',
}

export class EntityCard extends Card {
    lp: number;
    nature: EEntityCardNature;
    isAlive: boolean;

    constructor(name: string, rarity: ECardRarity, nature: EEntityCardNature, picture: string, pa: number, mana: number, lp: number) {
        super(name, rarity, pa, mana, picture);
        this.lp = lp;
        this.nature = nature;
        this.isAlive = true;
    }

    get color(): string {
        return EntityCardNatureColor[this.nature];
    }

    get spells(): EntityCardSpell[] {
        return [];
    }
}