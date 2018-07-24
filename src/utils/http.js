function convertToHTTPS(httpUrl) {
  return httpUrl.slice(0, 4) + "s" + httpUrl.slice(4);
}

const http = {
  convertToHTTPS
};

export default http;
