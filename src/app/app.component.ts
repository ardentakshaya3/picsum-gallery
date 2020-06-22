import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { RandomImage } from './random-image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {

  title = "picsum-gallery";
  imgUrl: string = 'https://picsum.photos/700/400';
  imageToShow: any;
  images = [50, 83, 575].map((n) => `https://picsum.photos/id/${n}/450/400`);

  constructor(private imageService: RandomImage) {}

  createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }

  ngOnInit() {
      this.imageService.getImage(this.imgUrl).subscribe(data => {
        this.createImageFromBlob(data);
      }, error => {
        console.log(error);
      });
  }
}