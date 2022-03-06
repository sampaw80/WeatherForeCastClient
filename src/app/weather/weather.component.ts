import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Output() cancelSearch = new EventEmitter();
  model: any = {};
  weather: any;


  constructor(private http: HttpClient, public accountService: AccountService) {
  }
  public getWeather(chosenCity: string) {
    this.http.get('https://localhost:44363/api/SearchWeather/' + chosenCity).subscribe(result => {
      this.weather = result;
      
    });
}

  ngOnInit(): void {
  }
  cancel() {
    this.cancelSearch.emit(false);
  }
  
}
