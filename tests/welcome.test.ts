import request from "supertest";

import app from "../src/server/app";

describe("App test", () => {
  test("Welcome", async () => {
    const res = await request(app).get("/welcome");
    expect(res.body).toEqual({ message: "Hello! Welcome to Kaizen!" });
  });
});