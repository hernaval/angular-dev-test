import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {Brand} from "../core/model";
import {brandData} from "./sample.data";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  getAll(): Observable<Brand[]> {
    return of(brandData).pipe()
  }

  getById(id: number): Observable<Brand | null> {
    return of(brandData).pipe(
      map(brand => brand.find(d => d.brandId == id) || null),
    )
  }
}
