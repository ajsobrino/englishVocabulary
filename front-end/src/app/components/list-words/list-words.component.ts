import { Component, OnInit } from '@angular/core';
import { Word } from '../../model/word';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {

  words : Word [];
  page: number=1;
  numberPerPage: number;
  totalPage : number;

  constructor() { }

  ngOnInit(): void {
    this.totalPage = this.getTotalPages();
  }

  nextPage(){
    this.page = this.page+1;
  }

  previousPage(){
    this.page = this.page-1 ;
  }

  getTotalPages(){
    return 10;
  }

}
