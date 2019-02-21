import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations'
import {map} from 'rxjs/operators';
@Component({
  selector: 'layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:[
    trigger('navigationHidden',[
      state('closed',style({flex:'0 0 0%', 'max-width':'0%'})),
      state('open',style({})),
      transition('open => closed',animate('200ms ease-in')),
      transition('closed => open',animate('200ms ease-in')),
    ]),
    trigger('navigationMargin',[
      state('closed',style({flex:'0 0 100%', 'max-width':'100%'})),
      state('open',style({})),
      transition('open => closed',animate('200ms ease-in')),
      transition('closed => open',animate('200ms ease-in')),
    ])
  ]
})
export class MainComponent implements OnInit {

  constructor(private navService : NavigationService) {
    
  }

  hideNav = this.navService.hidden.pipe(map(hidden => hidden ? 'closed' : 'open'));

  ngOnInit() {
  }

  toggleNav(){
    this.navService.toggle();
  }

}
