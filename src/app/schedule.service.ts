import { Injectable } from '@angular/core';
import {Schedule  } from './models/schedule.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData: Schedule;
  scheduleList: AngularFireList<any>;
  // scheduleDoc: AngularFirestoreDocument<Schedule>;
  constructor(private db: AngularFireDatabase ) { }

  getSchedules(){
    this.scheduleList = this.db.list('schedules');
    return this.scheduleList;
  }

  insertSchedule(schedule: Schedule){
    this.scheduleList.push({
      name: schedule.name,
      appointment_date: schedule.appointment_date
    });

  }


}
