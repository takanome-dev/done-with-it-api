const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const schemas = require("../helpers/schemas");
const store = require("../store/users");
const validation = require("../middleware/validation");

router.post(
	"/",
	[auth.requireAuth, validation.validateSchema(schemas.pushTokenSchema)],
	async (req, res) => {
		const user = await store.getUserById(req.user.userId);

		if (!user) return res.status(400).send({ error: "Invalid user." });

		user.expoPushToken = req.body.token;
		
		return res.status(201).json();
	}
);

module.exports = router;
