
$(function() {
  console.log('hello world2 :o');
  
  class ShimaApi {
    constructor(options) {
      console.log(options);
      this._audioLevel = 0;
      this._buttonInput = [];
      this._lowPower = false;
      this._mode = '';
      this._touchpadInput = [];
      this._wearerHeading = 0;
    }
    
    /**
    * Returns the device audio level.
    * @returns {number} The device audio level.
    **/
    get audioLevel() {
      console.log('getting audio level');
      return this._audioLevel;
    }
    
    /**
    * Returns the last device button input.
    * @returns {array} The last device button input.
    **/
    get buttonInput() {
      return this._buttonInput;
    }
    
    /**
    * Indicates whether or not the device is in a low power state.
    * @returns {boolean} True if the device is in a low power state.
    **/
    get lowPower() {
      return this._lowPower;
    }
    
    /**
    * Returns the device mode.
    * @returns {string} The device mode.
    **/
    get mode() {
      return this._mode;
    }

    /**
    * Returns the last device touchpad input.
    * @returns {array} The last device touchpad input.
    **/
    get touchpadInput() {
      return this._touchpadInput;
    }
    
    /**
    * Returns the device wearer heading, a number from 0 to 359..
    * @returns {number} The device wearer heading.
    **/
    get wearerHeading() {
      return this.wearerHeading;
    }
    
    /**
    * Calls a provided function when the audio level changes,
    * passing in audioLevel as a parameter.
    */
    onAudioLevelChanged(callback) {
      callback(this.audioLevel);
    }
    
    /**
    * Calls a provided function when the button input changes,
    * passing in buttonInput as a parameter.
    */
    onButtonInput(callback) {
      callback(this.buttonInput);
    }
    
    /**
    * Calls a provided function when the low power status changes,
    * passing in lowPower as a parameter.
    */
    onLowPowerChange(callback) {
      callback(this.lowPower);
    }
    
    /**
    * Calls a provided function when the mode changes,
    * passing in mode as a parameter.
    */
    onModeChanged(callback) {
      callback(this.mode);
    }
    
    /**
    * Calls a provided function when the touchpad input changes,
    * passing in touchpadInput as a parameter.
    */
    onTouchpadInput(callback) {
      callback(this.touchpadInput);
    }
    
    /**
    * Calls a provided function when the wearer heading changes,
    * passing in wearerHeading as a parameter.
    */
    onWearerHeadingChanged(callback) {
      callback(this.wearerHeading);
    }

  }
  
  class SocialFloApi {
    constructor(options) {
      this._brightness = 0;
      this._handedness = false;
      this._larpNumber = '';
      this._modStyle = '';
      this._wearerAge = 0;
      this._wearerCourse = 0;
      this._wearerLanguage = '';
    }
    
    /**
    * Returns the device brightness.
    * @returns {number} The device brightness.
    **/
    get brightness() {
      return this._brightness;
    }
    
    /**
    * Returns whether the device handedness is set to left.
    * @returns {boolean} True if the device handedness is set.
    **/
    get handedness() {
      return this._handedness;
    }
    
    /**
    * Returns the device [literally what is this].
    * @returns {string} The device [something].
    **/
    get larpNumber() {
      return this._larpNumber;
    }
    
    /**
    * Returns the device user's mod style setting.
    * @returns {string} The device mod style.
    **/
    get modStyle() {
      return this._modStyle;
    }
    
    /**
    * Returns the device user's age.
    * @returns {number} The device user's age.
    **/
    get wearerAge() {
      return this._wearerAge;
    }
    
    /**
    * Returns the device user's course heading, a number from 0 to 359.
    * @returns {number} The device user's course heading.
    **/
    get wearerCourse() {
      return this._wearerCourse;
    }
    
    /**
    * Returns the device user's language.
    * @returns {string} The device user's language setting.
    **/
    get wearerLanguage() {
      return this._wearerLanguage;
    }
  }
  
  var test = new ShimaApi('empty');
  var level = test.audioLevel;

});
