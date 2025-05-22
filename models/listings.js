import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});

const Listing = mongoose.models.Listing || mongoose.model('Listing', listingSchema);
export default Listing;