import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const Portfolio = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;