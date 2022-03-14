import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IAlbum } from '../interfaces/Album';
import { IPhoto } from '../interfaces/Photo';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums() {
    return (
      this.http.get<IAlbum[]>(
        `https://jsonplaceholder.typicode.com/users/1/albums`
      ) || of([])
    );
  }

  getAlbumPhotos(req: IAlbum) {
    return (
      this.http.get<IPhoto[]>(
        `https://jsonplaceholder.typicode.com/albums/${req.id}/photos`
      ) || of([])
    );
  }
}
