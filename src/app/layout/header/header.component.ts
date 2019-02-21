import { Component, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  toggleNav(){
    this.navigationService.toggle();
  }

}
