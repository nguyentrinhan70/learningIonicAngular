import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.page.html',
  styleUrls: ['./struct.page.scss'],
})
export class StructPage implements OnInit {
  isShow = true;
  arraySubjects = ['Angular', 'Ionic', 'NodeJs', 'React'];
  constructor() { }

  ngOnInit() {
  }

}
