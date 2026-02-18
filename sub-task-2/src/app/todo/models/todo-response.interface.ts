import { ITodoBase } from './todo-base.interface';

export interface ITodoResponse extends ITodoBase {
    userId?: number;
    creationDate?: string;
}
