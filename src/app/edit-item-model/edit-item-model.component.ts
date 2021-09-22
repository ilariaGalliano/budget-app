import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'fb-edit-item-model',
  templateUrl: 'edit-item-model.component.html',
  styleUrls: ['edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem) {

  }
}
