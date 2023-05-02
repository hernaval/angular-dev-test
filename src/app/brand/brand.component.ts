import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Campain} from "./core/model";
import {BrandService} from "./services/brand.service";
import {CampainService} from "./services/campain.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit{
  campain$: Observable<Campain[]> = of([])

  constructor(private brandService: BrandService, private campainService: CampainService) {
  }

  ngOnInit(): void {
    this.loadCampain()
  }

  loadCampain(): void {
    this.campain$ = this.campainService.getAll()
  }


}
