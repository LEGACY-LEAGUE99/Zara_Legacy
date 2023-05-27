
import { Request, Response } from 'express';
import Help from '../models/HelpModel';

 const Helps = async (req: Request, res: Response) => {
  try {
    const helpPage = await Help.findOne({ titel: req.params.titel });
    if (!helpPage) {
      return res.status(404).json({ message: 'Help page not found.' });
    }
    return res.json(helpPage);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.' });
  }
};


export default Helps