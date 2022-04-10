import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Output() addQuote = new EventEmitter<any>();
  @Output() quoteCL = new EventEmitter<boolean>();
  close(isFalse: boolean) {
    this.quoteCL.emit(isFalse);
  }
  submitQuote(form: NgForm, formValue: any) {
    if (form.valid) {
      this.addQuote.emit(formValue);
      form.reset();
    } else {
      alert("Enter name and quote please");
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
