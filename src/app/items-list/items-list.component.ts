import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  filter: 'all' | 'active'| 'done' = 'all';

  allItems : Item[] = [
    { description: 'eat', done: true },
    { description: 'sleep', done: true },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];
  
  get items() {
    if(this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done'?
    item.done : !item.done);
  }

  addItems (description: string) {
    if(description.length > 0 && description.trim()) {
      this.allItems.unshift({
        description,
        done: false
      });
    }
    
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item),1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
