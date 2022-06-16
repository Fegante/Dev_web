import { FactoryStrategyAuthModel } from "./factory-strategy-auth";
import { StrategyTypeEnum } from "./strategy-type.enum";

export class AuthenticationService {
    factoryStrategyAuth: FactoryStrategyAuthModel = new FactoryStrategyAuthModel();

    authentication(strategyTypeEnum: StrategyTypeEnum){
        this.factoryStrategyAuth.fabricateStrategy(strategyTypeEnum);
    }
}