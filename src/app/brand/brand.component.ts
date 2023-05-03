import {Component, OnInit} from '@angular/core';
import {filter, map, Observable, of} from "rxjs";
import {Brand, Campain} from "./core/model";
import {BrandService} from "./services/brand.service";
import {CampainService} from "./services/campain.service";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit{
  campain$: Observable<Campain[]> = of([])
  brand$: Observable<Brand[]> = of([])
  searchForm!: FormGroup
  constructor(private brandService: BrandService, private campainService: CampainService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loadCampainAndBrand()

    this.searchForm = this.fb.group({
      'name': [''],
      'brandId': ['']
    })
  }

  loadCampainAndBrand(): void {
    this.campain$ = this.campainService.getAll()
    this.brand$ = this.brandService.getAll()
  }


  applySearchAndFilter() {
    if(this.searchForm.valid) {
      const {name, brandId} = this.searchForm.value
      this.campain$ = this.campainService.filter(name, Number(brandId))
    }
  }
}
