import { Component, OnInit } from '@angular/core';

import { TaskRepository } from './task-repository.service';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    task: any[] = [];
    error: string;

    constructor(
        private taskRepository: TaskRepository
    ) { }

    ngOnInit() {
        this.taskRepository
            .getList()
            .subscribe(
                data => this.task = data,
                error => this.error = error.message
        );
    }

}
