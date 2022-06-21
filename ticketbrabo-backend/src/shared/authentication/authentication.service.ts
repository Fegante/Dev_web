import { FactoryStrategyAuthModel } from "./factory-strategy-auth";
import { StrategyTypeEnum } from "./strategy-type.enum";

export class AuthenticationService {
    factoryStrategyAuth: FactoryStrategyAuthModel = new FactoryStrategyAuthModel();

    authentication(strategyTypeEnum: StrategyTypeEnum){
        const authentication = this.factoryStrategyAuth.fabricateStrategy(strategyTypeEnum);
        authentication.authentication();
    }
}