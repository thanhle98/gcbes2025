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

    const { data, error } = await resend.emails.send({
      to: email,
      subject: "Em Hiền - Tài liệu tham luận sự kiện GCBES 2025",
      html: `
      <p>Xin chào và cảm ơn quý anh/chị đã quan tâm đến sự kiện GCBES 2025,</p>
      <p>Đây là link tài liệu tham luận của sự kiện GCBES 2025: <a href="${link}">${link}</a></p>
      <p>Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ em qua email <a href="mailto:hello@vietfas.com">hello@vietfas.com</a></p>
      <p>Trân trọng,</p>
      <p>Em Hiền</p>`,
    });

    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
