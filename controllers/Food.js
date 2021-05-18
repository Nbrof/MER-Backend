const router = require("express").Router();

const { Router } = require("express");

const Food = require("../models/Food")


//Food Seed

const foodSeed = [
    {
        name: "Pad ka Pao",
        img: "https://www.eatingthaifood.com/wp-content/uploads/2014/01/thai-basil-chicken-recipe1.jpg",
        origin: "Thailand",
        
    },

    {
        name: "Filet Mignon",
        img: "https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg",
        origin: "France",
       
    },

    {
        name: "Sushi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthkwAAhABODaA67TYDghINSZ4jYdIqw9tPw&usqp=CAU",
        origin: "Japan"

    },


];


// Seed Route 
router.get("/seed", async (req, res) => {
    try {
      await Food.remove({});
      await Food.create(foodSeed);
      const foods = await Food.find({});
      res.json(foods);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //index Router

router.get("/", async (Req, res) => {
    try {
      const foods = await Food.find({});
      res.json(foods);
    } catch (error) {
      res.status(400).json(error);
    }
  });


  //create route

  router.post("/", async (req, res) => {
    try {
      const newFood = await Food.create(req.body);
      res.json(newFood);
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const updatedFood = await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedFood);
    } catch (error) {
      res.status(400).json(error);
    }
  });

router.delete("/:id", async (req, res) => {
    try {
      const deletedFood = await Food.findByIdAndRemove(req.params.id);
      res.json(deletedFood);
    } catch (error) {
      res.status(400).json(error);
    }
  });



  module.exports = router