import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSub: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater than 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstSub = customIntervalObservable.subscribe(
      // Callback to perform work on the information returned
      // from the observable
      data => {
        console.log(data);
      },
      // Callback to run should the observable throw an
      // error
      error => {
        console.log(error);
        alert(error.message);
      },
      // Callback that runs when the observable completes.
      // This does not run after an error.
      () => {
        console.log("Completed!");
      }
    );
  }

  ngOnDestroy(): void {
    this.firstSub.unsubscribe();
  }
}
