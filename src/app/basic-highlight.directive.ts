import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appBasicHighlight]'     // Selector Property: <p appBasicHighlight></p>
  //selector: 'appBasicHighlight'     //Selector Ellement: <appBasicHighlight></appBasicHighlight>
  //selector: '[appBasicHighlight]'   //Selector Class: <p class="appBasicHighlight"></p>
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elRef : ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.style.color = "red";
    this.elRef.nativeElement.style.backgroundColor = "yellow";
  }

}
