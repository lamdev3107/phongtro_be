export default function expiredPostNotification(name, postTitle, expiredDate) {
  return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>Thông báo hết hạn bài đăng</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f6f6f6;
          margin: 0;
          padding: 0;
        }
        .container {
          background: #fff;
          max-width: 600px;
          margin: 40px auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          padding: 32px 24px;
        }
        .header {
          color: #d32f2f;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .content {
          color: #333;
          font-size: 16px;
          margin-bottom: 24px;
        }
        .footer {
          color: #888;
          font-size: 13px;
          margin-top: 32px;
          border-top: 1px solid #eee;
          padding-top: 16px;
        }
        .post-title {
          color: #1976d2;
          font-weight: bold;
        }
        .expired-date {
          color: #d32f2f;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">Thông báo hết hạn bài đăng</div>
        <div class="content">
          Xin chào <b>${name}</b>,<br><br>
          Bài đăng <span class="post-title">"${postTitle}"</span> của bạn đã <span class="expired-date">hết hạn</span> vào ngày <b>${expiredDate}</b>.<br><br>
          Nếu bạn muốn tiếp tục hiển thị bài đăng, vui lòng gia hạn hoặc đăng lại bài mới.<br>
          Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
        </div>
        <div class="footer">
          Đây là email tự động, vui lòng không trả lời email này.<br>
          Mọi thắc mắc xin liên hệ bộ phận hỗ trợ của chúng tôi.
        </div>
      </div>
    </body>
    </html>
  `;
}
