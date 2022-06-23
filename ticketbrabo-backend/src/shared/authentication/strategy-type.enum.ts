
export enum StrategyTypeEnum {
    GOOGLE = 'google',
    LOCAL = 'local'
}

export abstract class StrategyTypeConverter {
    static getStrategyTypeByString(stringToConverter: string): StrategyTypeEnum {
        return StrategyTypeEnum[stringToConverter as keyof typeof StrategyTypeEnum];
    }
}