import { Component, OnInit } from '@angular/core';


import { ViewContainerRef,  Directive} from '@angular/core';
@Directive({
  selector: '[teachforlife-ref-select]',
})
export class TeachforlifeRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-teachforlife',
  templateUrl: './teachforlife.component.html',
  styleUrls: ['./teachforlife.component.css'],
})
export class TeachforlifeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
