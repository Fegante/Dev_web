import { COOKIE_NAME } from "@configs/settings";
import { AuthenticationService } from "@shared/authentication/authenticationService";
import { StrategyTypeConverter, StrategyTypeEnum } from "@shared/authentication/strategy-type.enum";
import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();
const authService = new AuthenticationService();

const {CREATED, OK, UNAUTHORIZED} = StatusCodes;

export const paths = {
    type: '/:type',
};

router.post(paths.type, async (req, res) => {
    const enumType: StrategyTypeEnum = StrategyTypeConverter.getStrategyTypeByString(req.params.type);
    let token;
    try {
        token = await authService.authentication(enumType, req.body);
    } catch(err) {
        console.log(err);
        const urlRedirect = `${String(process.env.REDIRECT_TO_UI)}/`;
        return res.status(UNAUTHORIZED).send();
    }

    if(enumType == StrategyTypeEnum.LOCAL) {
        return res.send({type: "success", data: token});
    }

    return res.redirect(`${String(process.env.REDIRECT_TO_UI)}/authToken/${token}`);
});

router.get(paths.type, async (req, res) => {
    const enumType: StrategyTypeEnum = StrategyTypeConverter.getStrategyTypeByString(req.params.type);

    try {
        const token = await authService.authentication(enumType, req.query);
        return res.redirect(`${String(process.env.REDIRECT_TO_UI)}/authToken/${token}`);

    } catch(err) {
        console.log(err)
        return res.status(UNAUTHORIZED).redirect("/");
    }
    
   
});

export default router;