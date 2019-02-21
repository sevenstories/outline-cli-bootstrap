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
      state('closed',style({'max-width':'0px'})),
      state('open',style({})),
      transition('open => closed',animate('400ms ease-in')),
      transition('closed => open',animate('400ms ease-in')),
    ]),
    // trigger('navigationMargin',[
    //   state('closed',style({flex:'0 0 100%', 'max-width':'100%'})),
    //   state('open',style({})),
    //   transition('open => closed',animate('300ms ease-in')),
    //   transition('closed => open',animate('300ms ease-in')),
    // ])
  ]
})
export class MainComponent implements OnInit {

  constructor(private navService : NavigationService) {
    
  }

  hideNav = this.navService.hidden.pipe(map(hidden => hidden ? 'closed' : 'open'));

  ngOnInit() {
  }



}
