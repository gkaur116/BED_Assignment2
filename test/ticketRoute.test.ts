import request from "supertest";
import app from "../src/app";

describe("Ticket Routes", () => {
    it("should return all tickets", async () => {
        const response = await request(app).get("/api/v1/tickets");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });
});
