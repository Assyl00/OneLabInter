import {Directive, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";

@Directive()
export class DestroyComponent implements OnDestroy {
  protected $destroyed: Subject<void>;

  constructor() {
    this.$destroyed = new Subject();
  }

  get destroyed() {
    return this.$destroyed;
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

}