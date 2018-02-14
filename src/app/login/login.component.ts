import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public mediaService: MediaService, private router: Router) { }

  ngOnInit() {
    this.mediaService.getUserData().subscribe(response => {
      this.router.navigate(['front']);
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

}
