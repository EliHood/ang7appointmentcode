import { Component, OnInit } from '@angular/core';
import {ScheduleService} from '../schedule.service';
import {NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})
export class ScheduleCreateComponent implements OnInit {

  constructor(public scheduleService: ScheduleService, public firestore: AngularFirestore ) { }

  ngOnInit() {
    this.resetForm();
  }
  // // this doesn't work
  // onSubmit(form: NgForm) {
  //  this.scheduleService.insertSchedule(form.value)
  // }
  


  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
 
    if (form.value.id == null)
      this.firestore.collection('schedules').add(data);
    else
      this.firestore.doc('schedules/' + form.value.id).update(data);
    this.resetForm(form);

  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.scheduleService.formData = {
      id: null,
      name: '',
      appointment_hour:'',
      appointment_date:''
    }
  }

}