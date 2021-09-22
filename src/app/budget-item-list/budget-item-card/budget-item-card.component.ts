import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'fb-budget-item-card',
  templateUrl: 'budget-item-card.component.html',
  styleUrls: ['budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  // @Input() isIncome: boolean = true;
  
  @Input() item!: BudgetItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.xButtonClick.emit();
  }

  onCardclick() {
    this.cardClick.emit();
  }

}
