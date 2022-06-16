import { Authentication } from "./authentication";
import { GoogleStrategyAuth } from "./google-strategy-auth";
import { LocalStrategyAuth } from "./local-strategy-auth";
import { StrategyTypeEnum } from "./strategy-type.enum";


export class FactoryStrategyAuthModel {
    private _authenticationStrategy!: Authentication;

    fabricateStrategy(strategyTypeEnum: StrategyTypeEnum): Authentication {
        if(strategyTypeEnum = StrategyTypeEnum.GOOGLE) {
            this._authenticationStrategy = new GoogleStrategyAuth();
        } else if(strategyTypeEnum = StrategyTypeEnum.LOCAL){
            this._authenticationStrategy = new LocalStrategyAuth();
        }

        return this._authenticationStrategy;
    }
}