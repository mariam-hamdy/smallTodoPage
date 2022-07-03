import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  editable: boolean = false;
  
  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();


  saveItem(description:string) {
    if(!description) return;
    this.editable= false;
    if(description.trim())
      this.item.description= description;

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
