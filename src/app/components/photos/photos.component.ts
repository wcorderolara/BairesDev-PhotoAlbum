import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photosList:Array<any>;

  constructor(
    private service:AlbumService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  compare( a, b) {
    const _a = a.id;
    const _b = b.id;

    let compare = 0;

    if( _a > _b ){
      compare = 1;
    } else if (_a < _b) {
      compare = -1;
    }

    return compare * -1;

  }

  getPhotos(albumId) {
    this.service.getPhotos()
                .subscribe( response => {
                  let res = response
                              .filter( obj => {
                                return obj.albumId == albumId;
                              })
                              .sort(this.compare)
                              .slice(0, 2);
                  this.photosList = res;
                })
  }

  ngOnInit() {
    let albumId = this.activatedRoute.snapshot.paramMap.get('albumId');

    this.getPhotos(albumId);
  }

}
