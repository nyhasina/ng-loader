import { Component, OnInit } from '@angular/core';

interface Label {
  label: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  data: Label[] = [];
  show = false;

  ngOnInit(): void {
    this.data = new Array(20).fill({}).map((v, i) => ({ label: `Element ${i + 1}`, value: i + 1}));
  }
}
