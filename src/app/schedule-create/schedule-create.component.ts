import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../schedule.service';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})
export class ScheduleCreateComponent implements OnInit {

  constructor(private scheduleService: ScheduleService ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(scheduleForm: NgForm){
    this.scheduleService.insertSchedule(scheduleForm.value);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.scheduleService.formData = {
      name: '',
      appointment_date:''
    }
  }
  
}
