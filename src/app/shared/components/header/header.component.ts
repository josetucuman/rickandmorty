import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
  <input
    #inputSearch
    type="text"
    class="form-control-lg"
    placeholder="Buscando... ..."
  />
  `,
  styles: ['input {width:100;}']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
