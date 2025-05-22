import { connectToDatabase } from '../../../lib/mongodb';
import Portfolio from '../../../models/portfolio';
export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const portfolioItems = await Portfolio.find();
      return res.status(200).json(portfolioItems);
    case 'POST':
      const { title, imageUrl, description } = req.body;
      const newItem = new Portfolio({ title, imageUrl, description });
      await newItem.save();
      return res.status(201).json(newItem);
    case 'PUT':
      const { id, ...updates } = req.body;
      const updatedItem = await Portfolio.findByIdAndUpdate(id, updates, { new: true });
      return res.status(200).json(updatedItem);
    case 'DELETE':
      const { id } = req.body;
      await Portfolio.findByIdAndDelete(id);
      return res.status(204).end();
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}