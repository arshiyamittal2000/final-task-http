import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  Data!: FormGroup;
  url: any;
  Api = {
    title: "", upload1: ["",Validators.required], upload2: ["",Validators.required],
  };

  constructor(
    private _api: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.Data = this.fb.group({
      title: '',
    });
  }

  Submit() {
    this.Api.title = this.Data.value?.title;
    this._api.setTitle(this.Data.value?.title);
    this.Api.upload1 = this.url;
    this.Api.upload2 = this.url;

    this.router.navigate(['page2']);

    this._api.saveData(this.Api).subscribe((res: any) => {
      // console.log(res);
    });
  }

  File(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;

      if (this._api.getupload1() == 'null') {
        this._api.setupload1(this.url);
      } else {
        this._api.setupload2(this.url);
      }
    };
  }

}
