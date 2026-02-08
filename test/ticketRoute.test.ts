import request from "supertest";
import app from "../src/app";

describe("Support Ticket Routes", () => {
    it("should return all tickets", async () => {
        const response = await request(app).get("/api/v1/tickets");
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it("should return a ticket when id exists", async () => {
        const createRes = await request(app).post("/api/v1/tickets").send({
            title: "Test Ticket",
            description: "Test Description",
            priority: "low",
        });
        const id = createRes.body.id;
        const res = await request(app).get(`/api/v1/tickets/${id}`);
        expect(res.status).toBe(200);
        expect(res.body.id).toBe(id);
    });

    it("should return 404 when ticket does not exist", async () => {
        const res = await request(app).get("/api/v1/tickets/9999");
        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Ticket not found");
    }); 
});