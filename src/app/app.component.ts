import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testApp';
  
  dateTime:any;
savedDate:any;
  constructor(private datePipe:DatePipe) {
    console.log('AppComponent');
  }
  ngOnInit(): void {
    
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    this.dateTime = this.datePipe.transform(yesterday,"yyyy-MM-dd");
  }


  changeDateTime(){


    console.log(this.dateTime);

   this.dateTime = this.datePipe.transform(this.savedDate,"yyyy-MM-dd");
   
  }

  saveDate(){
     this.savedDate = this.dateTime.toString();

     console.log(this.savedDate);
  }

  resetDate(){

    
    this.dateTime = this.datePipe.transform(Date.now(),"yyyy-MM-dd");

  }


}
