import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'layout-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {

  constructor(private navService : NavigationService) { }

  ngOnInit() {
  }

  toggleNav(){
    this.navService.toggle();
  }
}
