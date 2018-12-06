import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ScheduleService } from '../schedule.service';
import { Schedule } from '../models/schedule.model';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  list:Schedule[];
  constructor(private firestore: AngularFirestore, private service: ScheduleService ) { }

  ngOnInit() {
    this.service.getAppointments().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return{
          ...item.payload.doc.data()
        } as Schedule;
      })
    });
  }

  getSchedules(){
    return this.firestore.collection('schedules').snapshotChanges();
  }
  
}