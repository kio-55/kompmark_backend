import CertificatesService from "../services/CertificatesService.js";

class CertificatesController {
  async getAll(req, res) {
    try {
      const certificate = await CertificatesService.getAll();
      res.status(200).json(certificate);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async post(req, res) {
    try {
      const crearedCertificate = await CertificatesService.create(req.body);
      res.json(crearedCertificate);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }

  async delete(req, res) {
    try {
        const certificate = await CertificatesService.delete(req.params.id);
        res.status(200).json(certificate);
    } catch (error) {
      return res.status(500).json({ message: "Server error, try again later" });
    }
  }
}

export default new CertificatesController();