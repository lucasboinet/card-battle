export enum ECardRarity {
    COMMON = 'common',
    RARE = 'rare',
    EPIC = 'epic',
    LEGENDARY = 'legendary'
}

export abstract class Card {
    name: string;
    rarity: ECardRarity;
    picture: string;
    pa: number;
    mana: number;
    
    constructor(name: string, rarity: ECardRarity, pa: number, mana: number, picture: string) {
        this.name = name;
        this.rarity = rarity;
        this.pa = pa;
        this.mana = mana;
        this.picture = picture;
    }
}