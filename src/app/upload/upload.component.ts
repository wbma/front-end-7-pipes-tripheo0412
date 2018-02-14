import { Component, OnInit } from '@angular/core';
import {Media} from '../interfaces/media';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  media: Media = {
    file: null,
    title: '',
    description: ''
  };
  constructor(public mediaService: MediaService) {
  }
  setFile(evt) {
    console.log(evt.target.files[0]);
    this.media.file = evt.target.files[0];
  }

  startUpload(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('title', this.media.title);
    formData.append('description', this.media.description);
    formData.append('file', this.media.file);

    this.mediaService.startUpload(formData).subscribe(response => {
      console.log(response);
    });

  }

  ngOnInit() {
  }

}
