import request from "supertest";

import app from "../src/server/app";

describe("Tast routes", () => {
  test("Get all task", async () => {
    const res = await request(app).get("/api/v1/tasks");
    expect(res.body).toEqual([{
      id: "0123456789",
      title: "Pasear al perro",
      description: "Sacar al perro a pasera",
      createdAt: "2024-09-30T16:46:16.650Z"
    }]);
  });
});