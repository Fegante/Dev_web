import { Authentication } from "./authentication";
import { FacebookStrategyAuth } from "./facebook-strategy-auth";
import { GoogleStrategyAuth } from "./google-strategy-auth";
import { LocalStrategyAuth } from "./local-strategy-auth";
import { StrategyTypeEnum } from "./strategy-type.enum";


export class FactoryStrategyAuthModel {
    private _authenticationStrategy!: Authentication;

    fabricateStrategy(strategyTypeEnum: StrategyTypeEnum): Authentication {
        if(strategyTypeEnum == StrategyTypeEnum.GOOGLE) {
            this._authenticationStrategy = new GoogleStrategyAuth();
        } else if(strategyTypeEnum == StrategyTypeEnum.LOCAL) {
            this._authenticationStrategy = new LocalStrategyAuth();
        } else if (strategyTypeEnum == StrategyTypeEnum.FACEBOOK) {
            this._authenticationStrategy = new FacebookStrategyAuth();
        }

        return this._authenticationStrategy;
    }
}