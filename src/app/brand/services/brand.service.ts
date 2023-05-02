import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Brand} from "../core/model";
import {brandData} from "./sample.data";

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  getAll(): Observable<Brand[]> {
    return of(brandData).pipe()
  }
}
