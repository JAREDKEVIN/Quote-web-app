import { Component, OnInit } from "@angular/core";

import { ModelClass } from "../custom-class/model-class";

@Component({
  selector: "app-quotes-gen",
  templateUrl: "./quotes-gen.component.html",
  styleUrls: ["./quotes-gen.component.css"],
})
export class QuotesGenComponent implements OnInit {
  quoteGenerator: ModelClass[] = [
    //generate new quote
    new ModelClass(
      "kevin",
      "never give up",
      "KIPKEMOI",
      new Date(2022, 6, 6, 12, 49, 10),
      30,
      5
    ),
    new ModelClass(
      "kevin",
      "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
      "Walt Disney",
      new Date(2022, 6, 7, 12, 49, 10),
      20,
      2
    ),
    new ModelClass(
      "kevin",
      "Don’t Let Yesterday Take Up Too Much Of Today.",
      "Ja Loka",
      new Date(2022, 6, 8, 12, 49, 10),
      40,
      3
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  showForms: boolean = false;
  formToggle() {
    // show form function
    this.showForms = true;
  }
  clos(isFalse: boolean) {
    //close form function
    this.showForms = isFalse;
  }

  addNewQuote(qoutee: any) {
    this.quoteGenerator.push(
      //generate new quote function
      new ModelClass(
        qoutee.userName,
        qoutee.qoute,
        qoutee.author,
        new Date(),
        0,
        0
      )
    );
    this.showForms = false;
  }

  del(isDelete: boolean, index: number) {
    // delete button function
    if (isDelete) {
      let confirmDelete = confirm("Are you sure you want to delete this quote??");
      if (confirmDelete) this.quoteGenerator.splice(index, 1);
    }
  }
  showDetails(index: number) {
    // show all details function
    this.quoteGenerator[index].showDetails = !this.quoteGenerator[index]
      .showDetails;
  }
}
