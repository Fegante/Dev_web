
export enum StrategyTypeEnum {
    GOOGLE = 'google',
    LOCAL = 'local',
    FACEBOOK = 'facebook'
}

export abstract class StrategyTypeConverter {
    static getStrategyTypeByString(stringToConverter: string): StrategyTypeEnum {
           const stringKeyEnum = stringToConverter.toUpperCase()  as keyof typeof StrategyTypeEnum
           return StrategyTypeEnum[stringKeyEnum];
    }
}