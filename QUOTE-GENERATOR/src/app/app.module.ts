import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuotesGenComponent } from "./quotes-gen/quotes-gen.component";
import { FormComponent } from "./form/form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { VoteComponent } from "./vote/vote.component";
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { TimerCounterPipe } from "./timer-counter.pipe";
import { HighlightDirective } from "./highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    QuotesGenComponent,
    FormComponent,
    VoteComponent,
    QuoteDetailsComponent,
    TimerCounterPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
