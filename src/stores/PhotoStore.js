/**
|--------------------------------------------------
| Unstated Store for Photo-related states and actions
|--------------------------------------------------
*/
import { Container } from "unstated";
import API from "../services/API";

class PhotoStore extends Container {
  state = {
    albums: [], // List of albums to be shown in AlbumScreen
    photoMap: {}, // Key-Value mapping from albumId to photos, for use in AlbumScreen/AlbumDetailScreen
    currentAlbum: []  // Photos to be shown in AlbumDetailScreen
  };

  // Called when AlbumScreen is first loaded
  // It loads both albums and photos simultaneously and it converts to desired formats
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

  // Called before transitioning to AlbumDetailScreen, in order to show only relevant photos
  setCurrentAlbum = albumId => {
    this.setState({ currentAlbum: this.state.photoMap[albumId] });
  };
}

export default new PhotoStore();
