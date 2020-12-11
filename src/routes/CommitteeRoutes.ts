import Router from "express";
import UnregisteredUserTodo from "../controllers/UnregisteredController";
import authorization from "../middlewares/authorization";
import CommitteeController from "../controllers/CommitteeController";
import authentication from "../middlewares/authentication";
const router = Router();

// router.post(
//   "/createRules", authentication,
//   authorization.allowifloggedin, authorization.grantacsess("create", "rules"),
//   CommitteeController.createRules
// );
router.post(
  "/createRules/:id",
  authorization.comittee,
  CommitteeController.createRules
);

// router.post(
//   "/createGame",
//   authentication,
//   authorization.allowifloggedin,
//   authorization.grantacsess("create", "rules"),
//   CommitteeController.createTournament
// );
router.post(
  "/createGame/:id",
  authorization.comittee,
  CommitteeController.createTournament
);

// router.put(
//   "/approve",
//   authentication,
//   authorization.allowifloggedin,
//   authorization.grantacsess("updateOwn", "assignpart"),
//   CommitteeController.approveSubmission
// );
router.put(
  "/approve/:id",
  authorization.comittee,
  CommitteeController.approveSubmission
);

router.put(
  "/approveGroup/:id",
  authorization.comittee,
  CommitteeController.approveGroup
);

export default router;
