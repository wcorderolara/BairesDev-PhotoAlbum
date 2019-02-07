import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'

import { Album } from '../classes/album';
import { Photo } from '../classes/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumsArray = [];
  photosUrl = "https://jsonplaceholder.typicode.com/photos";
  albumsUrl = "https://jsonplaceholder.typicode.com/albums";
  headers = new HttpHeaders( {'Content-Type':'application/json'});

  constructor(
    private http: HttpClient,
  ) { }

  private handleError(error: any): Observable<any> {
    console.log('An error has ocurred please wait');
    console.log(error);
    return (error.message || error);
  }

  getAlbums():Observable<any[]> {
    return this.http.get(this.albumsUrl, { headers: this.headers })
                    .pipe(
                      this.handleError
                    )
  }

  getPhotos():Observable<any[]> {
    return this.http.get(this.photosUrl, { headers: this.headers })
                    .pipe(
                      this.handleError
                    )
  }
}
