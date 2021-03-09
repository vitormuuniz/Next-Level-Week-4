import { Router } from "express";
import AnswerController from "./controllers/AnswerController";
import NpsController from "./controllers/NpsController";
import SendMailController from "./controllers/SendMailController";
import SurveysController from "./controllers/SurveysController";
import UserController from "./controllers/UserController";

const router = Router();

router.post("/users", UserController.create);

router.post("/surveys", SurveysController.create);
router.get("/surveys", SurveysController.show);

router.post("/sendMail", SendMailController.execute);

router.get("/answers/:value", AnswerController.execute);

router.get("/nps/:survey_id", NpsController.execute);

export { router };
