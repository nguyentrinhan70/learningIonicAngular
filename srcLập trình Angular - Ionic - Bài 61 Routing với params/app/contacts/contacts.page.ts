import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contacts = [
    {id: 1, name: 'Nguyễn Trí Nhân', phoneNumber:'0919367857'},
    {id: 2, name: 'Trần Thị Minh Hằng', phoneNumber: '0908567526'},
    {id: 3, name: 'Nguyễn Trần Khánh Hà', phoneNumber: '0913210094'},
    {id: 4, name: 'Nguyễn Khánh Ngân', phoneNumber: '0911147585'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
