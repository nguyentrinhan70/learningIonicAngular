import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  newEn ='';
  newVn ='';
  isShowForm = false;
  filterStatus ='Xem_Tat_Ca';
  constructor() { }

  addWord(): void{
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    })
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }
  removeWord(id: number){
    const index = this.arrWords.findIndex(word => word.id ===id);
    this.arrWords.splice(index, 1);
  }

  getShowStatus(memorized: boolean){
    const dkXemTatCa = this.filterStatus==='Xem_Tat_Ca';
    const dkXemDaNho = this.filterStatus==='Xem_Da_Nho'&& memorized;
    const dkXemChuaNho = this.filterStatus==='Xem_Chua_Nho'&& !memorized;
    return dkXemTatCa||dkXemDaNho||dkXemChuaNho;
  }
  ngOnInit() {
  }

}
