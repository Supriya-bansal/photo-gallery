import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/interfaces/Album';
import { AlbumService } from 'src/app/services/album.service';
import { IPhoto } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albums: IAlbum[] = [];
  selectedAlbumId: number;
  filteredAlbums: IAlbum[] = [];
  filteredPhotos: IPhoto[] = [];
  validationMessage = 'No photos found for search criteria.';
  searchTextAlbum: string;
  searchTextPhoto: string;

  constructor(public albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe((albums) => {
      if (albums) {
        this.albums = albums;
        this.filteredAlbums = albums;
      }
    });
  }

  getPhotos(album: IAlbum) {
    this.selectedAlbumId = album.id;
    this.albumService.getAlbumPhotos(album).subscribe((photos) => {
      if (photos) {
        album.photos = photos;
        this.filteredPhotos = photos;
      }
    });
  }

  filterAlbums(filterAlbums: any) {
    this.filteredAlbums = filterAlbums;
    if (
      !this.filteredAlbums.find((album) => album.id === this.selectedAlbumId)
    ) {
      this.filteredPhotos = [];
    } else {
      this.filteredPhotos = this.getSelectedAlbumPhotos();
    }
  }

  filterPhotos(filterPhotos: any) {
    this.filteredPhotos = filterPhotos;
  }

  getSelectedAlbumPhotos() {
    let selectedAlbum = null;
    if (this.selectedAlbumId) {
      selectedAlbum = this.albums.find(
        (album) => album.id === this.selectedAlbumId
      );
    }
    return selectedAlbum ? selectedAlbum.photos : [];
  }

  setSearchText(text: string, domId?: string) {
    switch (domId) {
      case 'fi-album':
      default:
        this.searchTextAlbum = text;
        break;

      case 'fi-photo':
        this.searchTextPhoto = text;
        break;
    }
  }
}
