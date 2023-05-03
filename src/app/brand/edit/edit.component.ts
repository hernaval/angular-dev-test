import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of} from "rxjs";
import {Brand, Campain} from "../core/model";
import {BrandService} from "../services/brand.service";
import {CampainService} from "../services/campain.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  campain$!: Observable<Campain | null>
  brand$: Observable<Brand[]> = of([])
  constructor(private route: ActivatedRoute, private brandService: BrandService, private campainService: CampainService) {
  }
  ngOnInit(): void {
    this.loadCampainAndBrand()
  }

  loadCampainAndBrand(): void {
    const id = this.route.snapshot.paramMap.get("id")
    this.campain$ = this.campainService.getById(Number(id))
    this.brand$ = this.brandService.getAll()
  }

}
