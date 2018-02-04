import {Component, Input, ElementRef, Renderer2, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})

export class LazyImageComponent implements AfterViewInit {
  @Input() image:string;

  @ViewChild('placeholder') d1:ElementRef;
  @ViewChild('imgSmall') d2:ElementRef;

  smallImage:string = "https://i.imgur.com/ohaxOCa.png";
  mainDiv: any;

  constructor(private renderer: Renderer2, private elm: ElementRef) {
  }

  ngAfterViewInit() {
    const imgLarge = new Image();
    imgLarge.src = this.d1.nativeElement.getAttribute('data-large');
    imgLarge.className = 'reveal';
    imgLarge.onload = (() => {
      this.renderer.appendChild(this.d1.nativeElement, imgLarge);
      this.renderer.listen('document', 'animationend', (event) => {
        console.log('animation ended');
        this.renderer.removeChild(this.d1.nativeElement, this.d2.nativeElement);
        event.target.classList.remove('reveal');
      });
    });
  }
}
