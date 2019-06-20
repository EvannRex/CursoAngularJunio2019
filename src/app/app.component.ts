import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loading = false;

  constructor(private dataService: DataService){
    dataService.getIsLoading().subscribe(val =>{
      console.log('is loading',val);
      this.loading = val;
    });
  }
}
