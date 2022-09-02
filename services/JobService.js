import Job from "../models/Job.js";

class JobsService {
  async getAll() {
    const jobs = await Job.find();
    return jobs;
  }

  async create(job) {
    const createdJob = new Job({
      title: job.title,
      description: job.description,
      payment: job.payment,
    });

    const savedJob = await createdJob.save();
    
    return savedJob;
  }

  async delete(id) {
    if (!id) {
        throw new Error("Id underfinded");
    }
    const job = await Job.findByIdAndDelete(id);
    return job;
  }
}

export default new JobsService();