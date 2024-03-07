import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Directive({
  selector: "[highlight]"
})
export class HighlightDirective {
  constructor(hostElement: ElementRef, renderer: Renderer2) {
    renderer.addClass(hostElement.nativeElement, "highlight");
  }
}
