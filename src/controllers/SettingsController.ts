import {Request, Response} from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController{
  async create(req: Request, res: Response){
    const {chat, username} = req.body;
    const settingService = new SettingsService();

    try{
      const settings = await settingService.create({chat, username});
      return res.json(settings);
    }catch (err){
      res.status(400).json({
        message: err.message,
      });
    }
    
  }
}

export { SettingsController }