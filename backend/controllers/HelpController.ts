
import { Request, Response } from 'express';
import Help from '../models/HelpModel';

 const Helps = async (req: Request, res: Response) => {
  try {
    const helpPage = await Help.findOne({ topic: req.params.topic });
    if (!helpPage) {
      return res.status(404).json({ message: 'Help page not found.' });
    }
    return res.json(helpPage);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

const Segg = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.query;
    // Perform a MongoDB query to retrieve suggestions based on the searchQuery
    const suggestions = await Help.find({ topic: { $regex: searchQuery, $options: 'i' } }).limit(10);
    return res.json(suggestions);
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export default { Helps, Segg }