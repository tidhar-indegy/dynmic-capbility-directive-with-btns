import {
  ComponentFactoryResolver,
  ViewContainerRef,
  Type,
  Injectable,
ComponentRef
} from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CompGeneratorService {
  constructor(private compFactory: ComponentFactoryResolver ) {}

  createComponent( comp: Type<any>,
  viewComponentRef:ViewContainerRef,
  attachTo: Subject<any> ) {
    const generated = this.compFactory.resolveComponentFactory(comp);
    const result = viewComponentRef.createComponent(generated)
    result.instance.done = attachTo;
  }
}
