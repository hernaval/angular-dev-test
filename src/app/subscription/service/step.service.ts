import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StepService {
  stepSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  updateStep(step: number) {
    this.stepSubject$.next(step)
  }
  currentStep() {
    return this.stepSubject$
  }
}
