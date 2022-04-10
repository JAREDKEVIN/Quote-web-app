import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-vote",
  templateUrl: "./vote.component.html",
  styleUrls: ["./vote.component.css"],
})
export class VoteComponent implements OnInit {
  @Input() vote: any;
  @Output() deleted = new EventEmitter();
  delete(dl: boolean): void {
    this.deleted.emit(dl);
  }

  likes() {
    this.vote.likes++; // increase upvotes
  }
  dislikes() {
    this.vote.unlike++; //increase downVotes
  }

  constructor() {}

  ngOnInit(): void {}
}
