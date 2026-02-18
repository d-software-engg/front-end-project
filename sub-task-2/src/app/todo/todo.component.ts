import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoApiService } from './services/todo-api.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ItemComponent } from './components/item/item';

@Component({
    selector: 'app-todo.component',
    standalone: true,
    imports: [ItemComponent],
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
    private todoApiService = inject(TodoApiService);

    public todoItems = toSignal(this.todoApiService.getTodos(), {initialValue: []});
}
