import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  getApiImage: any;
  apiContent = [
    {
      title: '',
      upload1: '',
      upload2: '',
    },
  ];
  constructor(private _api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this._api.getPhotos().subscribe((res: any) => {
      this.getApiImage = res;
      for (let i = 0; i < 4; i++) {
        if (i < 3) this.pushObject();
        this.apiContent[i].title = this.getApiImage[i]?.title;
        this.apiContent[i].upload1 = this.getApiImage[i]?.url;
        this.apiContent[i].upload2 = this.getApiImage[i]?.thumbnailUrl;
      }
    });
  }
  pushObject() {
    this.apiContent.push({
      title: '',
      upload1: '',
      upload2: '',
    });
  }

  move() {
    this.router.navigate(['page3']);
  }

}
