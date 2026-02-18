import { Component, input } from '@angular/core';
import { ITodoResponse } from '../../models/todo-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tr[app-item]',
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class ItemComponent {
  item = input.required<ITodoResponse>();
}
