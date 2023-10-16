const express = require("express");
const router = express.Router();

const {
  createHero,
  createHeroes,
  updateHero,
  deleteHero,
  // deleteHeroes,
  getHero,
  getHeroes,
} = require("../controllers/heroController");

router.get("/", getHeroes);
router.get("/:id", getHero);
router.post("/", createHero);
router.post("/many", createHeroes);
router.patch("/:id", updateHero);
router.delete("/:id", deleteHero);
// router.delete("/", deleteHeroes);

module.exports = router;
