import { Component, OnInit, EventEmitter } from "@angular/core";
import { EventService } from "src/app/service/event/event.service";
import { ConfigService } from 'src/app/service/config/config.service';
import { TransferService } from 'src/app/service/data/transfer.service';

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit {
  data;
  config;

  constructor(private eventHandler: EventService, private dataStation: TransferService, private configStation: ConfigService) {}

  ngOnInit() {
    this.eventHandler.subscribe(this.draw.bind(this));
  }

  draw(data) {
    console.info(data);
    this.getData();
    this.getConfig();
  }

  getData() {
      this.data = this.dataStation.getData();
  }

  getConfig() {
      this.config = this.configStation.getConfig();
  }
}
