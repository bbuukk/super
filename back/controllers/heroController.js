const Hero = require("../models/hero");
const mongoose = require("mongoose");

const getHeroes = async (req, res) => {
  const heroes = await Hero.find({}).sort({ createdAt: -1 });

  res.status(200).json(heroes);
};

const getHero = async (req, res) => {
  const { id } = req.params;
  const result = await getHeroById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  res.status(200).json(result.hero);
};

const createHero = async (req, res) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = req.body;

  try {
    const hero = await Hero.create({
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
      images,
    });
    res.status(200).json(hero);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createHeroes = async (req, res) => {
  const heroes = req.body;

  try {
    const createdHeroes = await Hero.insertMany(heroes);
    res.status(200).json(createdHeroes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const result = await getHeroById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  await Hero.updateOne({ _id: id }, { ...req.body });
  res.status(200).json(result.hero);
};

const deleteHero = async (req, res) => {
  const { id } = req.params;
  const result = await getHeroById(id);

  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }

  await Hero.deleteOne({ _id: id });

  res.status(200).json(result.hero);
};

const deleteHeroes = async (req, res) => {
  const result = await Hero.deleteMany();
  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }
  res.status(200);
};

const getHeroById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return { status: 404, error: "No such hero" };
  }

  const hero = await Hero.findById(id);

  if (!hero) {
    return { status: 400, error: "No such hero" };
  }

  return { status: 200, hero };
};

module.exports = {
  createHero,
  createHeroes,
  updateHero,
  deleteHero,
  deleteHeroes,
  getHero,
  getHeroes,
};
