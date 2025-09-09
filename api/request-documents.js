// api/request-documents.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, phone, name, position, company } = req.body;

    if (!email || !phone || !name || !position || !company) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Example link you want to send
    const link = `https://drive.google.com/drive/folders/1xzTf1dcnoeX37Cb3hBA5PPIVuJaN_wi8`;

    const { data, error } = await resend.emails.send({
      from: "Em Hiền <hello@vietfas.com>",
      to: email,
      cc: "gcbes.acbc@gmail.com",
      subject: `Em Hiền - Tài liệu tham luận sự kiện GCBES 2025 cho ${name}`,
      html: `
      <p>Kính chào ${name},</p>
      <p>Cảm ơn anh/chị ${name} (${position} tại ${company}) đã quan tâm đến sự kiện GCBES 2025.</p>
      <p>Đây là link tài liệu tham luận của sự kiện GCBES 2025: <a href="${link}" style="color: #4F46E5; text-decoration: underline;">${link}</a></p>
      <p><strong>Thông tin của anh/chị:</strong></p>
      <ul>
        <li>Họ và tên: ${name}</li>
        <li>Chức vụ: ${position}</li>
        <li>Công ty/Đơn vị: ${company}</li>
        <li>Số điện thoại: ${phone}</li>
        <li>Email: ${email}</li>
      </ul>
      <p>Nếu có bất kỳ câu hỏi nào, vui lòng liên hệ em qua email <a href="mailto:hello@vietfas.com">hello@vietfas.com</a> hoặc số điện thoại.</p>
      <p>Trân trọng,</p>
      <p>Em Hiền</p>
      <p>VIETFAS Team</p>`,
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
