const express = require("express");
const router = express.Router();
const { validation, authenticate } = require("../../middlewares");
const { authControllers } = require("../../controllers");
const { joiSchema, joiSubscriptionSchema } = require("../../models/user");

router.post("/signup", validation(joiSchema), authControllers.signUp);
router.post("/signin", validation(joiSchema), authControllers.signIn);
router.get("/signout", authenticate, authControllers.signOut);
router.get("/current", authenticate, authControllers.currentUser);
router.patch(
  "/users",
  authenticate,
  validation(joiSubscriptionSchema),
  authControllers.subscriptionUpdate
);
module.exports = router;
