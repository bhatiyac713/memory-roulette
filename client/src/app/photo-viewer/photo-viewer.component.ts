import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {
  photo: Photo;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getRandomPhoto().subscribe(photo => (this.photo = photo));
  }
}
