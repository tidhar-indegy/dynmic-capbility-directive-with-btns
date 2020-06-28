import {
  Directive,
  Output,
  Input,
  EventEmitter,
  Host,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ViewContainerRef,
  SkipSelf
} from "@angular/core";
import { Subject } from "rxjs";
import { CompGeneratorService } from "../../services/comp-generator.service";
import { RedComponent } from "./red.component";
import { distinct, filter, take } from "rxjs/operators";
import { AppComponent } from "../../app.component";

@Directive({
  selector: "[appRed]",
  providers: [CompGeneratorService]
})
export class RedDirective {
  @Output() onDone = new EventEmitter();
  _onClickBtn = new Subject();

  @Input("appRed") set ref(vcr) {
    if (vcr) {
      this.compGeneratorService.createComponent(
        RedComponent,
        vcr,
        this._onClickBtn
      );

      this._onClickBtn.subscribe(c => {
        this.host.currentColor = "red";
        setTimeout(() => this.onDone.emit("red"), 300);
      });
    }
  }
  constructor(
    private compGeneratorService: CompGeneratorService,
    private host: AppComponent
  ) {}

  ngOnDestroy() {}
}
