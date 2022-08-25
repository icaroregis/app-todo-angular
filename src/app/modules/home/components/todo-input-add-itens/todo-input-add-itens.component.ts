import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent implements OnInit {
  /* output é como se fosse a comunicação mindireta do react onde temos que passar uma props de filho para pai e isso é possível através do output */
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitItemTaskList() {
    /* o método trim retira os espaços vazios */
    this.addItemTaskList = this.addItemTaskList.trim();
    this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = '';
  }
}
