import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  Title!: string;
  upload1!: string;
  upload2!: string;
constructor(private _api: ApiService) {}
ngOnInit(): void {
    this.Title = this._api.getTitle();
    this.upload1 = this._api.getupload1();
    this.upload2 = this._api.getupload2();
  }
}
