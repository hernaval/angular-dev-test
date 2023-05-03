import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {Campain} from "../core/model";
import { campainData} from "./sample.data";

@Injectable({
  providedIn: 'root'
})
export class CampainService {

  getAll(): Observable<Campain[]> {
    return of(campainData).pipe()
  }

  filter(name: string, brandId: number): Observable<Campain[]> {
    return of(campainData).pipe(
      map(list => list.filter(campain => {
        const nameFilter = !name || campain.campaignName.toLowerCase().includes(name.toLowerCase());
        const brandFilter = (campain.brand.brandId && campain.brand.brandId === Number(brandId));

        return  nameFilter && brandFilter
      })),
    )
  }

  getById(id: number): Observable<Campain | null> {
    return of(campainData).pipe(
      map(c => c.find(campain => campain.requestId == id) || null),
    )
  }
}
