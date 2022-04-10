import { Component, Input, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-quote-details",
  templateUrl: "./quote-details.component.html",
  styleUrls: ["./quote-details.component.css"],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() Qoute: any;

  constructor() {}

  ngOnInit(): void {}
}
