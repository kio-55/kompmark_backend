import Help from "../models/Help.js";

class HelpService {
  async getAll() {
    const help = await Help.find();
    return help;
  }

  async create(help) {
    const createdHelp = new Help({
      name: help.name,
      email: help.email,
      phone: help.phone,
    });

    const savedHelp = await createdHelp.save();
    
    return savedHelp;
  }

  async delete(id) {
    if (!id) {
        throw new Error("Id underfinded");
    }
    const help = await Help.findByIdAndDelete(id);
    return help;
  }
}

export default new HelpService();