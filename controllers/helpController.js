import HelpService from "../services/HelpService.js";

class HelpController {
  async getAll(req, res) {
    try {
      const help = await HelpService.getAll();
      res.status(200).json(help);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async post(req, res) {
    try {
      const crearedHelp = await HelpService.create(req.body);
      res.json(crearedHelp);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async delete(req, res) {
    try {
        const help = await HelpService.delete(req.params.id);
        res.status(200).json(help);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}

export default new HelpController();