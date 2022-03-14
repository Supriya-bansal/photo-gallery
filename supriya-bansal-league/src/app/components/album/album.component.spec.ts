import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Observable, Observer, of } from 'rxjs';
import { IAlbum } from 'src/app/interfaces/Album';
import { IPhoto } from 'src/app/interfaces/Photo';
import { ItalicizePipe } from 'src/app/pipes/italicize.pipe';
import { AlbumService } from 'src/app/services/album.service';

import { AlbumComponent } from './album.component';

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;
  let mockService: AlbumService;
  const mockAlbums = [
    {
      id: 1,
      userId: 1,
      title: 'text1',
      photos: [
        {
          albumId: 1,
          id: 151,
          thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
          title: 'possimus dolor minima provident ipsam',
          url: 'https://via.placeholder.com/600/1d2ad4',
        },
      ],
    },
    { id: 2, userId: 1, title: 'text2', photos: [] },
    { id: 3, userId: 1, title: 'Album3', photos: [] },
  ];

  const mockPhotos = [
    {
      albumId: 1,
      id: 151,
      thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
      title: 'possimus dolor minima provident ipsam',
      url: 'https://via.placeholder.com/600/1d2ad4',
    },
  ];

  class MockAlbumService {
    getAlbums() {
      return new Observable((observer: Observer<IAlbum[]>) => {
        observer.next(mockAlbums);
      });
    }

    getAlbumPhotos() {
      return new Observable((observer: Observer<IPhoto[]>) => {
        observer.next(mockPhotos);
      });
    }
  }

  beforeEach(async(() => {
    mockService = jasmine.createSpyObj<AlbumService>('AlbumService', {
      getAlbums: of(mockAlbums),
    });

    TestBed.configureTestingModule({
      declarations: [AlbumComponent, ItalicizePipe],
      imports: [HttpClientTestingModule],
      providers: [{ provide: AlbumService, useClass: MockAlbumService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check update to selectedAlbumId', () => {
    component.selectedAlbumId = 1;
    component.getPhotos(mockAlbums[0]);
    fixture.detectChanges();
    expect(component.selectedAlbumId).toBe(mockAlbums[0].id);
  });

  it('should test : filterAlbums()', () => {
    component.filterAlbums(mockAlbums);
    fixture.detectChanges();
    expect(component.filteredAlbums).toBe(mockAlbums);
  });

  it('should test : filterPhotos()', () => {
    const photos = [
      {
        albumId: 4,
        id: 151,
        thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
        title: 'possimus dolor minima provident ipsam',
        url: 'https://via.placeholder.com/600/1d2ad4',
      },
    ];

    component.filterPhotos(photos);
    fixture.detectChanges();
    expect(component.filteredPhotos).toBe(photos);
  });

  it('should correctly return selectedAlbum photos when getSelectedAlbumPhotos() is invoked', () => {
    component.selectedAlbumId = 1;
    component.albums = [
      {
        id: 1,
        userId: 1,
        title: 'text1',
        photos: [
          {
            albumId: 4,
            id: 151,
            thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
            title: 'possimus dolor minima provident ipsam',
            url: 'https://via.placeholder.com/600/1d2ad4',
          },
        ],
      },
      { id: 2, userId: 1, title: 'text2', photos: [] },
      { id: 3, userId: 1, title: 'Album3', photos: [] },
    ];

    fixture.detectChanges();
    expect(component.getSelectedAlbumPhotos()).toEqual([
      {
        albumId: 4,
        id: 151,
        thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
        title: 'possimus dolor minima provident ipsam',
        url: 'https://via.placeholder.com/600/1d2ad4',
      },
    ]);
  });

  it('should return empty array if there is no selected album.', () => {
    component.selectedAlbumId = null;
    fixture.detectChanges();
    expect(component.getSelectedAlbumPhotos()).toEqual([]);
  });

  it('should test if searchText is set properly for Albums', () => {
    component.searchTextAlbum = '';
    component.setSearchText('test', 'fi-album');
    fixture.detectChanges();
    expect(component.searchTextAlbum).toEqual('test');
  });

  it('should test if searchText is set properly for Photos', () => {
    component.searchTextPhoto = '';
    component.setSearchText('test', 'fi-photo');
    fixture.detectChanges();
    expect(component.searchTextPhoto).toEqual('test');
  });

  it('should clear photos if : filterAlbums() does not include selected album', () => {
    component.selectedAlbumId = 5;
    component.albums = [
      {
        id: 1,
        userId: 1,
        title: 'text1',
        photos: [
          {
            albumId: 4,
            id: 151,
            thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
            title: 'possimus dolor minima provident ipsam',
            url: 'https://via.placeholder.com/600/1d2ad4',
          },
        ],
      },
      { id: 2, userId: 1, title: 'text2', photos: [] },
    ];

    component.filterAlbums(component.albums);
    fixture.detectChanges();
    expect(component.filteredPhotos).toEqual([]);
  });

  it('should retain selected album photos if : filterAlbums() includes selected album', () => {
    component.selectedAlbumId = 1;
    component.albums = [
      {
        id: 1,
        userId: 1,
        title: 'text1',
        photos: [
          {
            albumId: 4,
            id: 151,
            thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
            title: 'possimus dolor minima provident ipsam',
            url: 'https://via.placeholder.com/600/1d2ad4',
          },
        ],
      },
      { id: 2, userId: 1, title: 'text2', photos: [] },
    ];

    component.filterAlbums(mockAlbums);
    fixture.detectChanges();
    expect(component.filteredPhotos).toEqual([
      {
        albumId: 4,
        id: 151,
        thumbnailUrl: 'https://via.placeholder.com/150/1d2ad4',
        title: 'possimus dolor minima provident ipsam',
        url: 'https://via.placeholder.com/600/1d2ad4',
      },
    ]);
  });

  it('should set filteredAlbums as the service mock response to : getAlbums()', fakeAsync(() => {
    component.getAlbums();
    tick();
    expect(component.filteredAlbums).toEqual(mockAlbums);
  }));

  it('should set filteredPhotos as the service mock response to : getAlbumPhotos()', fakeAsync(() => {
    component.getPhotos(mockAlbums[0]);
    tick();
    expect(component.filteredPhotos).toEqual(mockPhotos);
  }));
});
