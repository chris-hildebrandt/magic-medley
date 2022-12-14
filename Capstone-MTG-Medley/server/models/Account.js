import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    coverImg: { type: String },
    location: { type: String },
    bio: { type: String, maxlength: 1000, }
    // NOTE If you wish to add additional properties do so here

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

