import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewChecked,
   AfterViewInit,
   OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default, but can be overwritten.
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }

  ngOnInit() {
    console.log('ng oninit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
