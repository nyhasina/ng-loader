import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-loader, [loader]',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.15s', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('0.15s', style({opacity: 0}))
      ])
    ])
  ]
})
export class LoaderComponent implements AfterViewInit {
  @Input() loader: boolean;
  height = 0;
  width = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const host = this.elementRef.nativeElement;
    this.height = host.clientHeight;
    this.width = host.clientWidth;
  }
}
