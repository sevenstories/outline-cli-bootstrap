import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'layout-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
