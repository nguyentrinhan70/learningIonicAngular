import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
})
export class UserFormPage implements OnInit {
  name='';
  evenStyle ={color: 'red', fontSize: '40px'}
  oddStyle ={color: 'black', fontSize: '20px'}

  isHighlight = false;
  currentClass ={circle: !this.isHighlight, square: this.isHighlight};

  constructor() { }

  // showEvent(event){
  //   this.name=event.target.value;
  // }
  ngOnInit() {
  }

}
