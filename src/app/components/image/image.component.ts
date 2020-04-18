import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private imageService: ImageService) { }
  public formData = new FormData();
  public selectedFile: File = null;
  public imageSrc: string;
  ngOnInit() {

  }

  onSelectFile(event) {
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    console.log(this.formData.get('file'));
    this.imageService.uploadImage(this.formData).subscribe(
      res => {
        this.imageSrc = res;
      }
    );
  }
}
