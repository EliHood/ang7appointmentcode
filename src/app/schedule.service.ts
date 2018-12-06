import { Injectable } from '@angular/core';
import { Schedule } from './models/schedule.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData: Schedule;
  scheduleList: AngularFirestoreDocument<Schedule>;
  // scheduleDoc: AngularFirestoreDocument<Schedule>;
  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore) { }

  // ignore that code it doesnt work lol


  getAppointments(){
    return this.firestore.collection('schedules').snapshotChanges();
  }

  deleteSchedule(schedule: Schedule) {
    this.scheduleList = this.firestore.doc(`schedules/${schedule.eid}`);
    this.scheduleList.delete();
  }


  // insertSchedule(schedule: Schedule) {
  //   const itemsRef = this.db.list('schedules');
  //   // const promise = this.db.list('schedules').remove();
  //   itemsRef.push({
  //     name: schedule.name,
  //     appointment_date: schedule.appointment_date
  //   }).then(function(){
  //     console.log('success');
  //   }, function(err){
  //     console.log(err, 'You do not have access!');
  //   });

  // }



}
