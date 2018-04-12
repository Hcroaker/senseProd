import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { SearchPage } from '../search/search';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
  fillcounter : number;
  tkeyClick: number;
  pressedKeys : number[];
  today: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
    this.fillcounter = 0;
    this.pressedKeys = [];

    this.today = Date.now();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  keyClick(key){
    this.vibration.vibrate(50);
    console.log(key)
    this.tkeyClick = key;

    console.log("FILCOUNT " + this.fillcounter)

    if(this.fillcounter == 3){

      this.fillcounter++
      this.pressedKeys.push(key);

      setTimeout(() => {
        this.fillcounter = 0;

        console.log(JSON.stringify(this.pressedKeys));

        if(this.pressedKeys[0] == 4 && this.pressedKeys[1] == 2 && this.pressedKeys[2] == 2 && this.pressedKeys[3] == 6){
          this.navCtrl.push(SearchPage)
        }

        this.pressedKeys = [];
      }, 300);
    }else{
      this.fillcounter++

      this.pressedKeys.push(key);

    }

    setTimeout(() => {
      this.tkeyClick = null;
    }, 100);


  }
}
