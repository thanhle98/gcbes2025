// api/request-documents.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, phone } = req.body;

    if (!email || !phone) {
      return res.status(400).json({ error: "Missing email or phone" });
    }

    // Example link you want to send
    const link = `https://drive.google.com/drive/folders/1xzTf1dcnoeX37Cb3hBA5PPIVuJaN_wi8`;

    await resend.emails.send({
      from: "Mrs. Hien <hello@vietfas.com>",
      to: email,
      subject: "GCBES 2025 - Tài liệu tham luận",
      html: `<p>Xin chào và cảm ơn bạn đã quan tâm đến sự kiện GCBES 2025,</p><p>Đây là link tài liệu tham luận của GCBES 2025: <a href="${link}">${link}</a></p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
