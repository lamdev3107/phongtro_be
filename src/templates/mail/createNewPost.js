const createNewPostMailTemplate = ({ userName, postTitle, postId }) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2>Chào ${userName || "bạn"},</h2>
      <p>Tạo mã thanh toán thành công! Vui lòng thanh toán để đăng bài.</p>
      <p>
        <b>Mã bài đăng:</b> ${postId}
      </p>
      <p>
        <b>Tiêu đề bài đăng:</b> ${postTitle}
      </p>
      <p>
        Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.<br/>
        Nếu bạn có bất kỳ thắc mắc nào, vui lòng liên hệ bộ phận hỗ trợ <a href="mailto:lamdev.3107@gmail.com">lamdev.3107@gmail.com</a>
      </p>
      <hr/>
      <p style="font-size: 13px; color: #888;">
        Đây là email tự động, vui lòng không trả lời email này.
      </p>
    </div>
  `;
};

export default createNewPostMailTemplate;
