import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { AlbumComponent } from "../components/album/album.component";
import { IAlbum } from "../interfaces/Album";
import { IPhoto } from "../interfaces/Photo";
import { AlbumService } from "./album.service";

describe("AlbumService", () => {
  let service: AlbumService;
  let httpTestingController: HttpTestingController;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumComponent],
      providers: [AlbumService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumService);
    httpTestingController = TestBed.inject(HttpTestingController);
  }));

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getAlbums() should return expected albums", fakeAsync(() => {
    const mockAlbums: IAlbum[] = [
      { id: 1, userId: 1, title: "text1" },
      { id: 2, userId: 1, title: "text2" },
      { id: 2, userId: 1, title: "Album3" },
    ];

    tick();
    service.getAlbums().subscribe((albums) => {
      expect(albums).withContext("expected albums").toEqual(mockAlbums);
    });

    const req = httpTestingController.expectOne(
      "https://jsonplaceholder.typicode.com/users/1/albums"
    );

    req.flush(mockAlbums);
  }));

  it("getAlbumPhotos() should return expected album photos", fakeAsync(() => {
    const mockAlbum = { id: 1, userId: 1, title: "Album1" };

    const mockPhotos: IPhoto[] = [
      {
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/1d2ad4",
        title: "possimus dolor minima provident ipsam",
        url: "https://via.placeholder.com/600/1d2ad4",
      },
    ];

    tick();
    service.getAlbumPhotos(mockAlbum).subscribe((photos) => {
      expect(photos).withContext("expected photos").toEqual(mockPhotos);
      expect(photos[0].albumId)
        .withContext("expected photo properties")
        .toEqual(mockAlbum.id);
    });

    const req = httpTestingController.expectOne(
      `https://jsonplaceholder.typicode.com/albums/${mockAlbum.id}/photos`
    );

    req.flush(mockPhotos);
  }));
});
