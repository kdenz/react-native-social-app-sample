import { Container } from "unstated";
import API from "../services/API";

class PhotoStore extends Container {
  state = {
    albums: [],
    photoMap: {},
    currentPhotos: []
  };

  initializePhotoStore = async () => {
    const result = await this.loadAlbumsWithPhotos();

    let photoMap = {};
    result.photos.forEach(item => {
      if (photoMap[item.albumId]) {
        photoMap[item.albumId].push(item);
      } else {
        photoMap[item.albumId] = [item];
      }
    });

    this.setState({ albums: result.albums, photoMap });
  };

  loadAlbumsWithPhotos = async () => {
    let albums = API.fetchAlbums();
    let photos = API.fetchPhotos();

    return {
      albums: await albums,
      photos: await photos
    };
  };

  loadPhotos = async albumId => {
    const result = await API.fetchPhotos(albumId);
    this.setState({
      currentPhotos: result
    });
  };
}

export default new PhotoStore();
