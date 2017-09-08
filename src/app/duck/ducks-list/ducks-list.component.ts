import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Duck } from '../../shared/models/duck.model';

@Component({
  selector: 'app-ducks-list',
  templateUrl: './ducks-list.component.html',
  styleUrls: ['./ducks-list.component.css']
})
export class DucksListComponent {

  @Input() ducks: Duck[];
  @Output() duckRemoved: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  onRemove(duckId: number){
    this.duckRemoved.emit(duckId);
  }
}
