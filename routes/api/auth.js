const express = require("express");
const router = express.Router();
const { validation, authenticate } = require("../../middlewares");
const { authControllers } = require("../../controllers");
const { joiSchema } = require("../../models/user");

router.post("/signup", validation(joiSchema), authControllers.signUp);
router.post("/signin", validation(joiSchema), authControllers.signIn);
router.get("/signout", authenticate, authControllers.signOut);
router.get("/current", authenticate, authControllers.currentUser);
module.exports = router;
