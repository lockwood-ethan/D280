import { Component, OnInit } from '@angular/core';
import { WorldbankService } from '../worldbank.service';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [],
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent implements OnInit {

  constructor(private apiService: WorldbankService) {}

  ngOnInit(): void {}

  onMouseOver(event: MouseEvent) {
    const path = (event.target) as SVGPathElement;
    const countryId = path.id;
    if (event.target instanceof SVGPathElement) {
      this.apiService.getCountryData(countryId).subscribe(data => {
        const countryData = data[1][0];
        const name = document.getElementById('name');
        name!.innerHTML = countryData.name;
        const capital = document.getElementById('capital');
        capital!.innerHTML = countryData.capitalCity;
        const region = document.getElementById('region');
        region!.innerHTML = countryData.region.value;
        const income = document.getElementById('income');
        income!.innerHTML = countryData.incomeLevel.value;
        const latitude = document.getElementById('latitude');
        latitude!.innerHTML = countryData.latitude;
        const longitude = document.getElementById('longitude');
        longitude!.innerHTML = countryData.longitude;
      });
      if (path) {
        path.style.fill ='red';
      }
    }
  };

  onMouseOut(event: MouseEvent) {
    if (event.target instanceof SVGPathElement) {
      const path = (event.target) as SVGPathElement;
      if (path) {
        path.style.fill = '';
      }
      const name = document.getElementById('name');
        name!.innerHTML = '';
        const capital = document.getElementById('capital');
        capital!.innerHTML = '';
        const region = document.getElementById('region');
        region!.innerHTML = '';
        const income = document.getElementById('income');
        income!.innerHTML = '';
        const latitude = document.getElementById('latitude');
        latitude!.innerHTML = '';
        const longitude = document.getElementById('longitude');
        longitude!.innerHTML = '';
    }
  };
}


