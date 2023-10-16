const mongoose = require("mongoose");
const request = require("supertest");
const testHeroCollection = require("./testHeroCollection.json");

const app = require("../app");
const hero = require("../models/hero");

require("dotenv").config();

describe("Heroes API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await mongoose.connection
      .collection("heroes")
      .insertMany(testHeroCollection);
  });

  afterEach(async () => {
    await mongoose.connection.collection("heroes").drop();
  });

  describe("GET /heroes", () => {
    it("should get all the heroes", async () => {
      const response = await request(app).get("/heroes");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /heroes/:id", () => {
    it("should get hero with specified id", async () => {
      const allHeroes = await mongoose.connection
        .collection("heros") //not a typo
        .find()
        .toArray();

      const heroId = allHeroes[0]._id.toString();

      const response = await request(app).get(`/heroes/${heroId}`);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /heroes", () => {
    it("should create a hero", async () => {
      const heroToCreate = testHeroCollection[0];

      const id = new mongoose.Types.ObjectId(heroToCreate._id);
      await mongoose.connection.collection("heroes").deleteOne({ _id: id });

      const response = await request(app)
        .post("/heroes")
        .set({
          "Content-Type": "application/json",
        })
        .send(heroToCreate);

      expect(response.statusCode).toBe(200);
    });
  });

  // describe("POST /heroes/many", () => {
  //   it("should create many heroes", async () => {
  //     await mongoose.connection.collection("heroes").drop();

  //     const heroesToCreate = testHeroCollection;
  //     console.log(heroesToCreate);
  //     const response = await request(app)
  //       .post("/heroes/many")
  //       .set({
  //         "Content-Type": "application/json",
  //       })
  //       .send(heroesToCreate);

  //     expect(response.statusCode).toBe(200);
  //     // expect(response.body.length).toBeGreaterThan(0);
  //   });
  // });

  describe("PATCH /heroes/:id", () => {
    it("update hero with specified id", async () => {
      const heroToUpdate = testHeroCollection[0];

      const response = await request(app)
        .patch(`/heroes/${heroToUpdate._id}`)
        .set({
          "Content-Type": "application/json",
        })
        .send(heroToUpdate);

      expect(response.statusCode).toBe(200);
    });
  });

  describe("DELETE /heroes/:id", () => {
    it("delete hero with specified id", async () => {
      const heroToDelete = testHeroCollection[0];

      const response = await request(app).delete(`/heroes/${heroToDelete._id}`);

      expect(response.statusCode).toBe(200);
    });
  });
});
