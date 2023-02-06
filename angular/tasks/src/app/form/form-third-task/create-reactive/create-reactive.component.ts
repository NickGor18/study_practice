import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TaskService} from "../../../second-module/task.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.css']
})
export class CreateReactiveComponent {
  constructor(private taskService: TaskService, private router: Router) {

  }

  createForm!: FormGroup

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      date: new FormControl('', [Validators.required, this.wrongDate]),
      time: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    })
  }

  handleSubmit(form: FormGroup) {
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

  wrongDate(control: FormControl) {
    const date = control.value

    const day = new Date(date).getDay()
    if (day === 6) return {'wrongDate': 'Must not be Saturday'}
    if (day === 0) return {'wrongDate': 'Must not be Sunday'}
    return null
  }

  validate(field: AbstractControl<any>) {
    return field.valid || field.untouched
  }

  cancel() {
    this.router.navigate(["/forms"])
  }
}
