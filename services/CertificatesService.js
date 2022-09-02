import Certificate from "../models/Certificate.js";

class CertificatesService {
  async getAll() {
    const certificates = await Certificate.find();
    return certificates;
  }

  async create(certificate) {
    const createdCertificate = new Certificate({
      title: certificate.title,
      imageUrl: certificate.imageUrl,
    });

    const savedCertificate = await createdCertificate.save();
    
    return savedCertificate;
  }

  async delete(id) {
    if (!id) {
        throw new Error("Id underfinded");
    }
    const certificate = await Certificate.findByIdAndDelete(id);
    return certificate;
  }
}

export default new CertificatesService();