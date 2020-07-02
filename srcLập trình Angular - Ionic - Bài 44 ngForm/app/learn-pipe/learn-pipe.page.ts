import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.page.html',
  styleUrls: ['./learn-pipe.page.scss'],
})
export class LearnPipePage implements OnInit {
  birthday = new Date(1969, 8, 2);
  person ={ name: 'Trí Nhân Nguyên', age: 50};
  address =Promise.resolve('34 Xuân Diệu, Quảng Ngãi City');
  constructor() { }

  ngOnInit() {
  }

}
