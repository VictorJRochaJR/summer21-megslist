import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        make: { type: String, required: true },
        bathrooms: { type: Number },
        bedrooms: { type: Number, },
        levels: { type: Number, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
        imgUrl: { type: String, default: "https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?s=612x612" },

    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;