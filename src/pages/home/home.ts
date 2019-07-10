import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isDart = false;

  constructor(public navCtrl: NavController) {
    const w = window.matchMedia('(prefers-color-scheme: dark)');
    w.addListener((e) => {
      this.isDart = !!e.matches
    });
  }

  toggleDart() {
    this.isDart ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.removeAttribute('data-theme');
  }
}
