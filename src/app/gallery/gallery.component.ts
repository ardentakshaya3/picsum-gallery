import { Component, OnInit } from '@angular/core';
import { RandomImage } from '../random-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private imageService: RandomImage, private router: Router) { }

  title = "Lorem";
  imgUrl: string = 'https://picsum.photos/v2/list';
  page = 1;
  images: any;

  ngOnInit() {
      this.imageService.getGallery(this.imgUrl).subscribe( res => { console.log(res) ;
        var info=JSON.parse(JSON.stringify(res));
        this.images = info;
      }, error => {
        console.log(error);
      });
  }

  nextPage() {
    this.page = this.page + 1;
    this.imgUrl = 'https://picsum.photos/v2/list?page='+this.page+'&limit=30';
    this.imageService.getGallery(this.imgUrl).subscribe( res => { console.log(res) ;
      var info=JSON.parse(JSON.stringify(res));
      this.images = info;
    }, error => {
      console.log(error);
    });
  }

  previousPage() {
    this.page = this.page - 1;
    this.imgUrl = 'https://picsum.photos/v2/list?page='+this.page+'&limit=30';
    this.imageService.getGallery(this.imgUrl).subscribe( res => { console.log(res) ;
      var info=JSON.parse(JSON.stringify(res));
      this.images = info;
    }, error => {
      console.log(error);
    });
  }

}