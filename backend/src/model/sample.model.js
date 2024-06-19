import mongoose, { Schema } from "mongoose";

const sampleSchema = new Schema({
    name: String,
    email: String,
    author: String,
})
sampleSchema.index({ name: 'text', email: 'text', author: 'text' });
const sampleModel = mongoose.model('sample_collection', sampleSchema, 'sample_collection');
sampleModel.createIndexes();
export {sampleModel}