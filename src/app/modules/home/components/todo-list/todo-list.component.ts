import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, DoCheck {
  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]'
  );

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage();
  }
  ngOnInit() {}

  public setEmitTaskList(event: string) {
    /* verificação para caso o usuário queira dicionar tasks vazias sem conteúdo */
    if (event === '') {
      return;
    }

    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (event.length === 0) {
      const confirm = window.confirm('Task está vazia! Deseja Deletar ?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList.length > 0) {
      this.taskList.sort((first, last): any => {
        Number(first.checked) - Number(last.checked);
      });

      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
