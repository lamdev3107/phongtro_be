export const getNumberFromString = (string) => {
  let number = 0;
  if (string.search("đồng/tháng") !== -1) {
    number = +string.match(/\d+/)[0] / Math.pow(10, 3);
  } else if (string.search("triệu/tháng") !== -1) {
    number = +string.match(/\d+/)[0];
  } else if (string.search("m")) {
    number = +string.match(/\d+/)[0];
  }
  return number;
};
export const getNumberFromStringV2 = (string) => {
  let number = 0;
  if (string.search("đồng/tháng") !== -1) {
    number = +string.match(/\d+/)[0] / Math.pow(10, 3);
  } else if (string.search("triệu/tháng") !== -1) {
    number = +string.split(" ")[0];
  } else if (string.search("m")) {
    number = +string.match(/\d+/)[0];
  }
  return +number;
};
export const convertFormData = (data) => {
  const convertedData = {};

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      const value = data[key];

      // Nếu giá trị có thể là số, chuyển đổi sang số
      if (!isNaN(value) && value.trim() !== "") {
        convertedData[key] = Number(value);
      }
      // Nếu giá trị là boolean (true/false)
      else if (value === "true" || value === "false") {
        convertedData[key] = value === "true";
      }
      // Nếu giá trị là danh sách phân cách bởi dấu phẩy
      else if (
        value.includes(",") &&
        value.split(",").every((item) => !isNaN(item))
      ) {
        let tmp = value.split(",");
        let isNumber = tmp.every((item) => !isNaN(item));
        if (isNumber)
          convertedData[key] = value.split(",").map((item) => {
            if (!isNaN(item) && item.trim() !== "") {
              return Number(item);
            }
            // Nếu giá trị là boolean (true/false)
            else if (item === "true" || item === "false") {
              return item === "true";
            }
          });
      }
      // Nếu không, giữ nguyên giá trị chuỗi
      else {
        convertedData[key] = value;
      }
    }
  }

  return convertedData;
};

export const createSlug = (str) => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
};

export const returnImagePublicId = (url) => {
  const parts = url.split("/");
  const publicId =
    parts.slice(-2, -1)[0] + "/" + parts.slice(-1)[0].split(".")[0];
  return publicId;
};
