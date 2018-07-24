const endpoint = "https://jsonplaceholder.typicode.com/";

class API {
  fetchFriendList = async () => {
    return this.getFromServer(endpoint + "users");
  };

  fetchPostList = async () => {
    return this.getFromServer(endpoint + "posts");
  };

  fetchAlbums = async () => {
    return this.getFromServer(endpoint + "albums");
  };

  fetchPhotos = async () => {
    return this.getFromServer(endpoint + "photos");
  };

  fetchTodos = async () => {
    return this.getFromServer(endpoint + "todos");
  };

  getFromServer = async uri => {
    try {
      let response = await fetch(uri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      return responseJson;
    } catch (err) {
      return "error";
    }
  };
}

export default new API();
