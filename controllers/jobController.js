import JobService from "../services/JobService.js";

class JobsController {
  async getAll(req, res) {
    try {
      const jobs = await JobService.getAll();
      res.status(200).json(jobs);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async post(req, res) {
    try {
      const crearedJob = await JobService.create(req.body);
      res.json(crearedJob);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async delete(req, res) {
    try {
        const job = await JobService.delete(req.params.id);
        res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}

export default new JobsController();