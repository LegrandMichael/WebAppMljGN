import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TaskRepository {

    constructor(
        private authHttp: AuthHttp
    ) { }

    getList() {
        const url = 'http://127.0.0.1:8000/api/tasks';

        return this.authHttp
            .get(url)
            .map((data: Response) => data.json());
    }

}
