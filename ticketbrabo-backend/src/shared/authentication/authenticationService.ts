import { FactoryStrategyAuthModel } from "./factory-strategy-auth";
import { StrategyTypeEnum } from "./strategy-type.enum";

export class AuthenticationService {
    factoryStrategyAuth: FactoryStrategyAuthModel = new FactoryStrategyAuthModel();

    authentication(strategyTypeEnum: StrategyTypeEnum, options?: any){
        const authentication = this.factoryStrategyAuth.fabricateStrategy(strategyTypeEnum);
        return authentication.authentication(options);
    }
}