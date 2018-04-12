import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

import { SplashPage } from '../splash/splash';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  critters: any[];
  selectedCritter: string;
  selectedHands: boolean;
  handRight: boolean;
  dashMode: boolean;

  signinFormContinue: boolean;
  setupKeyboard: boolean;
  setupKeypad:boolean;

  hitshift: boolean;
  specialkeys: boolean;
  theValue: string = '';

  selectKeyAgain: boolean;
  fillcounter : number;
  tkeyClick: number;
  pressedKeys : number[];

  constructor(public navCtrl: NavController, private vibration: Vibration) {
    this.critters = ['tiger', 'sloth', 'penguin', 'bunny', 'fox', 'glider', 'hedgehog', 'koala', 'lion', 'mouse', 'owl', 'panda', 'possum', 'seal', 'snail', 'squirrl']

    this.fillcounter = 0;
    this.pressedKeys = [];
}

  selectCritter(critter) {
      this.selectedCritter = critter
      this.signinFormContinue  = true;
  }

  setupKeyboardMode() {
    this.setupKeyboard = true;
  }

  unSetupKeyboardMode(){
    this.setupKeyboard = false;
  }

  KeypadMode() {
    this.setupKeypad = true;
  }

  unKeypadMode(){
    this.setupKeypad = false;
  }

  useKeyboard(key) {
      this.vibration.vibrate(20);

      if (this.hitshift) {
          this.theValue = this.theValue + key.toUpperCase();
      } else {
          this.theValue = this.theValue + key
      }

      // var str = this.theValue;
      // var theValue = str.replace(/ /g, "%20");


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

        // GO TO NEXT STEP

        if(this.selectKeyAgain){
          this.navCtrl.push(SplashPage)
        }else{
          this.selectKeyAgain = true;
          console.log(JSON.stringify(this.pressedKeys));
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
  useBackspace() {
      this.theValue = this.theValue.substring(0, this.theValue.length - 1);

      // var str = this.theValue;
      // var theValue = str.replace(/ /g, "%20");
  }

  backToHand(){
    this.selectedHands = false;
    this.setupKeyboard = false;
    this.setupKeypad = false;
    this.handRight = false;
  }

  leftHandClick(){
    this.selectedHands = true;
    this.handRight = false;
  }

  rightHandClick(){
    this.selectedHands = true;
    this.handRight = true;
  }

  activateshift() {
      this.vibration.vibrate(20);

      if (this.hitshift) {
          this.hitshift = false
      } else {
          this.hitshift = true
      }
  }

  dashTrigger(){
    this.navCtrl.push(SplashPage);
  }
  moreicons() {
      this.vibration.vibrate(20);

      if (this.specialkeys) {
          this.specialkeys = false
      } else {
          this.specialkeys = true
      }
  }

}
