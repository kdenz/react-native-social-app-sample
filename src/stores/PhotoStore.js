import { Container } from "unstated";
import API from "../services/API";

class PhotoStore extends Container {
  state = {
    albums: [],
    photoMap: {},
    currentAlbum: []
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

  setCurrentAlbum = albumId => {
    this.setState({ currentAlbum: this.state.photoMap[albumId] });
  };
}

export default new PhotoStore();
