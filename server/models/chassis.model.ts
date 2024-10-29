import crypto from "crypto";
import mongoose from 'mongoose';
const name= 'chassis'

const Schema = mongoose.Schema;

const schema = new Schema({
    name: String,
}, {
    timestamps: {createdAt: 'createdAt'},
    toObject: {virtuals: true},
    // use if your results might be retrieved as JSON
    // see http://stackoverflow.com/q/13133911/488666
    toJSON: {virtuals: true}
})


export const Chassis = mongoose.model(name, schema)
