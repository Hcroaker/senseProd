import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { SplashPage } from '../splash/splash'

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  hitshift: boolean;
  hitcaps: boolean;
  specialkeys: boolean;
  theValue: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
    this.hitshift = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  useKeyboard(key) {
      this.vibration.vibrate(20);

      if (this.hitshift) {
          this.theValue = this.theValue + key.toUpperCase();
      } else {
          this.theValue = this.theValue + key
      }

      if (this.hitshift && !this.hitcaps) {
          this.hitshift = false
      }
  }

    /** Use backspace */
    useBackspace() {
        this.theValue = this.theValue.substring(0, this.theValue.length - 1);

    }

    /** Use Shift */
    activateshift() {
        this.vibration.vibrate(20);

        if (this.hitshift) {
            this.hitshift = false
        } else {
            this.hitshift = true
        }

        if(this.hitcaps){
          this.hitcaps = false;
        }
    }

    /** Use Caps */
    activatecaps() {
        this.hitshift = true
        this.hitcaps = true
    }

    /** Activate other icons */
    moreicons() {
        this.vibration.vibrate(20);

        if (this.specialkeys) {
            this.specialkeys = false
        } else {
            this.specialkeys = true
        }
    }


    /** Call Search Function */
    searchSense(){

    }

    /** GoTo Splash */
    splashTrigger(){
      this.navCtrl.push(SplashPage)
    }


}
