import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'fb-budget-item-list',
  templateUrl: 'budget-item-list.component.html',
  styleUrls: ['budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems!: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

/*   onCardClicked() {
    // show the edit module
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: '580px'
    });
  } */

 /*  dialogRef.afterClosed().subscribe(result => {
    //check if result has a value
    if(result) {
      // replace the item with the updated item from the form
    }
  }) */

}
