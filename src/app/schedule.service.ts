import { Injectable } from '@angular/core';
import { Schedule } from './models/schedule.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  formData: Schedule;
  scheduleList: AngularFireList<any>;
  // scheduleDoc: AngularFirestoreDocument<Schedule>;
  constructor(private db: AngularFireDatabase, private firestore: AngularFirestore) { }

  // ignore that code it doesnt work lol


  getAppointments(){
    return this.firestore.collection('schedules').snapshotChanges();
  }



  insertSchedule(schedule: Schedule) {
    const itemsRef = this.db.list('schedules');
    // const promise = this.db.list('schedules').remove();
    itemsRef.push({
      name: schedule.name,
      appointment_date: schedule.appointment_date
    }).then(function(){
      console.log('success');
    }, function(err){
      console.log(err, 'You do not have access!');
    });

  }

}