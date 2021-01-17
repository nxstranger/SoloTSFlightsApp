import { Component, OnInit } from '@angular/core';
import {FlightsService} from '../flights.service';
import {Flight} from '../models/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightsService.getFlights();

    // this.flightsService.getFlights().subscribe(data => {
    //   this.flights = data;
    // });
  }
}
