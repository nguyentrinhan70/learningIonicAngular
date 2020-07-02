import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  @Input() name: string;
  @Input () age: number;
  constructor() { }

  ngOnInit() {
  }

}
