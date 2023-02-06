import { Component } from '@angular/core';
import {TaskService} from "../../../second-module/task.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private taskService: TaskService, private router: Router) {

  }

  handleSubmit(form: NgForm) {
    this.taskService.saveEvent({
      name: form.controls['name'].value as string,
      date: form.controls['date'].value as string,
      time: form.controls['time'].value as string,
      location: {
        address: form.controls['address'].value as string,
        city: form.controls['city'].value as string,
        country: form.controls['country'].value as string,
      }
    })
    this.router.navigate(['/form'])
  }



  cancel() {
    this.router.navigate(['/form'])
  }
}
