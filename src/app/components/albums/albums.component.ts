import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumsList:Array<any>;

  constructor(
    private service: AlbumService,
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

  getAlbums() {
    this.service.getAlbums()
                .subscribe( response => {
                  let res = response
                            .sort(this.compare)
                            .slice(0, 3)
                  this.albumsList = res;
                })
  }

  viewPhotos(album: any) {
    console.log('hola');
    this.router.navigate( ['photos/' + album.id]);
  }

  ngOnInit() {
    this.getAlbums();
  }

}
