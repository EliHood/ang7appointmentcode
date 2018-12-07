import { Injectable } from '@angular/core';
import { Schedule } from './models/schedule.model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore,AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData: Schedule;
  schedules: Observable<Schedule[]>;
  scheduleList: AngularFirestoreDocument<Schedule>;
  scheduleCollection: AngularFirestoreCollection<Schedule>;

  constructor(public db: AngularFireDatabase, public firestore: AngularFirestore) {
    this.scheduleCollection = this.firestore.collection('schedules');

    this.schedules = this.scheduleCollection.snapshotChanges().pipe(map(changes =>{
      return changes.map(a =>{
        const data = a.payload.doc.data() as Schedule;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

  // ignore that code it doesnt work lol


  getAppointments(){
    return this.schedules;
  }

  deleteSchedule(schedule: Schedule) {
    this.scheduleList = this.firestore.doc(`schedules/${schedule.id}`);
    const sched = this.scheduleList
    
    try{
      this.scheduleList.delete();
    }
    catch(err){
      console.log(err, "there seems to be an error" );
    }
   
   
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
