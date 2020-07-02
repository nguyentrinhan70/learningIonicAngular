import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  name='';
  constructor() { }

  showEvent(event){
    this.name=event.target.value;
  }
  ngOnInit() {
  }

}
