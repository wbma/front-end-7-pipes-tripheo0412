import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) { }

  mediaFiles: any;
  ngOnInit() {
    // this.mediaService.getUserData().subscribe(response => {
    //   console.log('Welcome ' + response['username']);
    // }, (error: HttpErrorResponse) => {
    //   this.router.navigate(['login']);
    // });
    this.mediaService.getNewFiles().subscribe(res => {
      this.mediaFiles = res;
      this.mediaFiles.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn320.png';
        media.thumbnail = this.mediaService.mediaUrl + thumbName;
      });
    });
  }

}
