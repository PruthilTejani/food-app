const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createrestaurantController,
  getAllrestaurantController,
  getrestaurantByIdController,
  deleterestaurantController,
} = require("../controllers/restaurantController");

const router = express.Router();

//routes
// CRAETE restaurant || POST
router.post("/create", authMiddleware, createrestaurantController);

// GET ALL restaurantS || GET
router.get("/getAll", getAllrestaurantController);

// GET restaurant BY ID || GET
router.get("/get/:id", getrestaurantByIdController);

// DELETE restaurant || DELETE
router.delete("/delete/:id", authMiddleware, deleterestaurantController);

module.exports = router;