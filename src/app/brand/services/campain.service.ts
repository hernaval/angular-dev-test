import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Campain} from "../core/model";
import {campainData} from "./sample.data";

@Injectable({
  providedIn: 'root'
})
export class CampainService {

  getAll(): Observable<Campain[]> {
    return of(campainData).pipe()
  }
}
