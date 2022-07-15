import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mobile') sideNav?: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  } 
}
