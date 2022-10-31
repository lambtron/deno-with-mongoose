
import mongoose from "npm:mongoose";
import Dinosaur from "./model/Dinosaur.ts";

await mongoose.connect('mongodb://localhost:27017');

// Create a new Dinosaur.
const deno = new Dinosaur({
  name: "Deno",
  description: "The fastest dinosaur ever lived."
});

// Insert deno.
await deno.save();

// Find Deno by name.
const denoFromMongoDb = await Dinosaur.findOne({ name: "Deno" });
console.log(denoFromMongoDb);

// Update description for Deno and save it.
await denoFromMongoDb.updateDescription("The fastest and most secure dinosaur ever lived.");

// Check MongoDB to see Deno's updated description.
const newDenoFromMongoDb = await Dinosaur.findOne({ name: "Deno" });
console.log(newDenoFromMongoDb);


