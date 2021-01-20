import {
  Directive,
  Output,
  Input,
  EventEmitter,
  ViewContainerRef
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
  private _currentVCR: ViewContainerRef;
  @Output() onDone = new EventEmitter();
  _onClickBtn = new Subject();

  @Input("appRed") set ref(vcr: ViewContainerRef) {
    this.clear();
    this.createBtnComponent(vcr);
  }
  constructor(
    private compGeneratorService: CompGeneratorService,
    private host: AppComponent
  ) {}

  private clear() {
    if (this._currentVCR) {
      this._currentVCR.clear();
    }
  }

  private registerToClick() {
    this._onClickBtn.subscribe(c => {
      this.host.currentColor = "red";
      setTimeout(() => this.onDone.emit("red"), 300);
    });
  }

  private createBtnComponent(vcr: ViewContainerRef) {
    if (vcr) {
      this._currentVCR = vcr;
      this.compGeneratorService.createComponent(
        RedComponent,
        vcr,
        this._onClickBtn
      );
      this.registerToClick();
    }
  }
}
