import { Injectable, Optional } from "@angular/core";
import { Subject } from "rxjs";

interface Info {
  event: String;
  message: String;
  data?: any;
}

@Injectable({
  providedIn: "root"
})
export class EventService {
  private subject = new Subject<any>();

  constructor() {}

  emit(info: Info) {
    this.subject.next(info);
  }

  subscribe(fn) {
    this.subject.asObservable().subscribe(fn);
  }
}
