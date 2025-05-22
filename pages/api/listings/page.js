import { connectToDatabase } from '../../../lib/mongodb';
import Listing from '../../../models/Listing';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const listings = await Listing.find();
      return res.status(200).json(listings);
    case 'POST':
      const { title, description, price } = req.body;
      const newListing = new Listing({ title, description, price });
      await newListing.save();
      return res.status(201).json(newListing);
    case 'PUT':
      const { id, ...updates } = req.body;
      const updatedListing = await Listing.findByIdAndUpdate(id, updates, { new: true });
      return res.status(200).json(updatedListing);
    case 'DELETE':
      const { id } = req.body;
      await Listing.findByIdAndDelete(id);
      return res.status(204).end();
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}