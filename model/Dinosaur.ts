import { Schema, model } from "npm:mongoose";

// Define schema.
const dinosaurSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

// Validations
dinosaurSchema.path("name").required(true, "Dinosaur name cannot be blank.");
dinosaurSchema.path("description").required(true, "Dinosaur description cannot be blank.");

// Methods.
dinosaurSchema.methods = {
  // Update description.
  updateDescription: async function(description: string) {
    this.description = description;
    return await this.save();
  }
}

// Statics.
dinosaurSchema.statics = {
  // Find dinosaur by name.
  findDinosaurByName: async function(name: string) {
    return await this.findOne({ name });
  }
}

// Export model.
export default model("Dinosaur", dinosaurSchema);
