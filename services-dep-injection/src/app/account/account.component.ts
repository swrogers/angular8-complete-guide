import { LoggingService } from './../logging.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    });
    this.loggingService.logStatusChange(status);
  }

}
