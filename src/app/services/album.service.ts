import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAlbum } from "../interfaces/Album";
import { IPhoto } from "../interfaces/Photo";

@Injectable({
  providedIn: "root",
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(
      `https://jsonplaceholder.typicode.com/users/1/albums`
    );
  }

  getAlbumPhotos(req: IAlbum): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(
      `https://jsonplaceholder.typicode.com/albums/${req.id}/photos`
    );
  }
}
