import request from "supertest";
import app from "../src/index";
import userService from "../src/services/user.service";

// Set test environment before importing app
process.env.NODE_ENV = "test";

jest.mock("../src/services/user.service", () => ({
  createUser: jest.fn(),
  getUserById: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn(),
}));
beforeEach(() => {
  jest.clearAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});
describe("User Controller", () => {
  it("should create a user", async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };
    // Mock the userService.createUser method
    (userService.createUser as jest.Mock).mockResolvedValue(userData);

    const response = await request(app).post("/api/users").send(userData);
   // console.log(response);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(userData);
  });
  it("should get a user by ID", async () => {
    const userId = "12345";
    const userData = {
      _id: userId,
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    };
    // Mock the userService.getUserById method
    (userService.getUserById as jest.Mock).mockResolvedValue(userData);

    const response = await request(app).get(`/api/users/${userId}`);
    //console.log(response);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(userData);
  });
});
