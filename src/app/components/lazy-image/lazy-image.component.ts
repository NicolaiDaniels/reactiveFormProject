import {Component, Input, ElementRef, Renderer2, OnInit, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss']
})

export class LazyImageComponent implements AfterViewInit {

  @Input() image:string;

  @ViewChild('placeholder') d1:ElementRef;
  @ViewChild('imgSmall') d2:ElementRef;

  smallImage:string = "/assets/images/smallPic.png";
  mainDiv: any;

  constructor(private renderer: Renderer2, private elm: ElementRef) {}

  ngAfterViewInit() {
    this.delayImageLoad(2000).then(() => {
      const imgLarge = new Image();
      imgLarge.src = this.d1.nativeElement.getAttribute('data-large');
      imgLarge.width = this.d1.nativeElement.offsetWidth;
      imgLarge.height = this.d1.nativeElement.offsetHeight;
      imgLarge.className = 'reveal';
      imgLarge.onload = (() => {
        this.renderer.appendChild(this.d1.nativeElement, imgLarge);
        this.renderer.listen(this.d1.nativeElement, 'animationend', (event) => {
          console.log('animation ended');
          this.renderer.removeChild(this.d1.nativeElement, this.d2.nativeElement);
          event.target.classList.remove('reveal');
        });
      });
    });
  }

  delayImageLoad(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
