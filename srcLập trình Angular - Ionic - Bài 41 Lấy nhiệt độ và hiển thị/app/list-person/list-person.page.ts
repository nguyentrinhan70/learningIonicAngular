import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.page.html',
  styleUrls: ['./list-person.page.scss'],
})
export class ListPersonPage implements OnInit {
  arrPeople=[
    {name: 'Nguyễn Trí Nhân', age: 50},
    {name: "Trần Thị Minh Hằng", age: 44},
    {name: 'Nguyễn Trần Khánh Hà', age: 12},
    {name:'Nguyễn Khánh Ngân', age: 8}

  ];
  constructor() { }

  ngOnInit() {
  }

}
