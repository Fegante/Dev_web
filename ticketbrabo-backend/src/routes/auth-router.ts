import { AuthenticationService } from "@shared/authentication/authenticationService";
import { StrategyTypeConverter, StrategyTypeEnum } from "@shared/authentication/strategy-type.enum";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const authService = new AuthenticationService();

const {CREATED, OK} = StatusCodes;

export const paths = {
    type: '/:type',
};
router.post(paths.type, async(req, res) => {
    const enumType: StrategyTypeEnum = StrategyTypeConverter.getStrategyTypeByString(req.params.type);
    authService.authentication(enumType, req.body);
    res.send();
});
router.get(paths.type, async (req, res) => {
    const enumType: StrategyTypeEnum = StrategyTypeConverter.getStrategyTypeByString(req.params.type);
    authService.authentication(enumType, req.query);
    //https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&response_type=code&client_id=743607987428-ao886h6i5o2aufju7a56u6huvcce9bm2.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fgoogle
    res.send();
});

export default router;