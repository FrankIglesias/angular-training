import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import Books from '../../../constants/books';



@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.scss']
})
export class BookdetailComponent implements OnInit {

  book: any = []
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.book = Books.find(b => b.id === Number(params.id))
    })

   }

  ngOnInit() {
  }

}
