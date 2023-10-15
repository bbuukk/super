const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../app");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("Heroes API", () => {
  describe("GET /heroes", () => {
    it("should get all the heroes", async () => {
      const response = await request(app).get("/heroes");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /heroes/:id", () => {
    it("should get hero with specified id", async () => {
      const response = await request(app).get("/heroes");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /heroes/:id", () => {
    it("should get hero with specified id", async () => {
      const response = await request(app).get("/heroes");

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  describe("POST /heroes", () => {
    it("should create a hero", async () => {
      const uniqueNickname = "Supermonye_" + Date.now(); // Unique nickname

      const hero = {
        nickname: uniqueNickname,
        real_name: "Clark Kent",
        origin_description:
          "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
        superpowers: [
          "solar energy absorption and healing factor",
          "solar flare and heat vision",
          "solar invulnerability",
          "flight",
        ],
        catch_phrase:
          "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-tyzyHjIxe4x8c1Jh2jOvU_Ngo9wkaC8mtn7_80GSMKcDG5iNguHSAu4bYU-woBQPso&usqp=CAU",
        ],
      };

      const response = await request(app)
        .post("/heroes")
        .set({
          "Content-Type": "application/json",
        })
        .send(hero);

      expect(response.statusCode).toBe(200);
    });
  });

  describe("POST /heroes/many", () => {
    it("should create many heroes", async () => {
      const uniqueNickname = "Supermonye_" + Date.now(); // Unique nickname

      const hero = {
        nickname: uniqueNickname,
        real_name: "Clark Kent",
        origin_description:
          "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…",
        superpowers: [
          "solar energy absorption and healing factor",
          "solar flare and heat vision",
          "solar invulnerability",
          "flight",
        ],
        catch_phrase:
          "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        images: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-tyzyHjIxe4x8c1Jh2jOvU_Ngo9wkaC8mtn7_80GSMKcDG5iNguHSAu4bYU-woBQPso&usqp=CAU",
        ],
      };

      const response = await request(app)
        .post("/heroes/many")
        .set({
          "Content-Type": "application/json",
        })
        .send([hero]);

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
  describe("PATCH /heroes/:id", () => {
    it("update hero with specified id", async () => {
      const hero = {
        nickname: "Groot",
        real_name: "Groot",
        origin_description:
          "Groot is a fictional character appearing in American comic books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, the character first appeared in Tales to Astonish #13 (November 1960). An extraterrestrial, sentient tree-like creature, the original Groot first appeared as an invader that intended to capture humans for experimentation.",
        superpowers: [
          "superhuman strength",
          "durability",
          "elasticity",
          "plant manipulation",
          "immortality",
        ],
        catch_phrase: "I am Groot.",
        images: [
          "https://i.redd.it/44gn6c87tt671.png",
          "https://i.ytimg.com/vi/KSxG05300Nc/maxresdefault.jpg",
        ],
      };

      const response = await request(app)
        .patch("/heroes/652a6c0c161297324e089336")
        .set({
          "Content-Type": "application/json",
        })
        .send(hero);

      expect(response.statusCode).toBe(200);
    });
  });

  // todo implement with mock data
  //   describe("DELETE /heroes/:id", () => {
  //     it("delete hero with specified id", async () => {
  //       const response = await request(app)
  //         .delete("/heroes/:id")
  //         .set({
  //           "Content-Type": "application/json",
  //         })
  //         .send(hero);

  //       expect(response.statusCode).toBe(200);
  //     });
  //   });
  //   describe("DELETE /heroes/:id", () => {
  //     it("delete hero with specified id", async () => {
  //       const response = await request(app).delete("/heroes/:id");

  //       expect(response.statusCode).toBe(200);
  //     });
  //   });
});
