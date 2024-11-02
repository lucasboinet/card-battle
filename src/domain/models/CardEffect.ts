import { EntityCard } from "./EntityCard";

export abstract class CardEffect {
    damage?: number;
    heal?: number;
    subtitle?: string;

    constructor() {}

    abstract apply(data?: any): void;
}

export interface ISimpleEffect {
    target: EntityCard,
}

export class SimpleCardEffect implements CardEffect {
    damage: number;

    constructor(damage: number) {
        this.damage = damage;
    }

    apply(data: ISimpleEffect) {
        const newLp = data.target.lp - this.damage;
        data.target.lp = Math.max(newLp, 0);

        if (data.target.lp === 0) {
            data.target.isAlive = false;
        }
    }
}

export interface ISelfHealEffect {
    self: EntityCard,
    target: EntityCard,
}

export class SelfHealCardEffect implements CardEffect {
    damage: number;
    heal: number;
    subtitle: string;

    constructor(damage: number, heal: number, subtitle: string) {
        this.damage = damage;
        this.heal = heal;
        this.subtitle = subtitle;
    }

    apply(data: ISelfHealEffect): void {
        data.self.lp += this.heal;
        const newLp = data.target.lp - this.damage;
        data.target.lp = Math.max(newLp, 0);

        if (data.target.lp === 0) {
            data.target.isAlive = false;
        }
    }
}