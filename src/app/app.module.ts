import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment} from '../environments/environment';
import {MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatInputModule} from '@angular/material';
import {  AngularFireDatabaseModule, AngularFireList } from '@angular/fire/database';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { FireStoreDatePipePipe } from './fire-store-date-pipe.pipe';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleCreateComponent,
    ScheduleListComponent,
    FireStoreDatePipePipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    NgxMaterialTimepickerModule.forRoot(),
    BrowserAnimationsModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
