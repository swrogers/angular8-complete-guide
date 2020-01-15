import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  // Use subjects to communicate across components
  // instead of event emitters.
  // Use event emitters when you need to use @Output
  activatedEmitter = new Subject<boolean>();
}
