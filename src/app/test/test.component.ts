/**
 * Test Component for testing different concepts of Angular
 * 1. NgTemplateOutlet is a directive : used to insert an embedded view from a prepared Template Ref.
 *    Using the key $implicit in the context object will set its value as default.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
/**
 * context for NgTemplateOutlet
 */
  myContext = {$implicit: 'World', localSk: 'Svet'};

}
