$(function() {
  console.log('hello world2 :o');
  
  class DeviceApi {
    constructor(options) {
      this._audioLevel = 0;
      this._buttonInput = [];
      this._lowPower = false;
      this._mode = '';
      this._touchpadInput = [];
      this._wearerHeading = 0;
      
      // provided delegate functions
      this._onAudioLevelChanged = null;
      this._onButtonInput = null;
      this._onLowPowerChange = null;
      this._onModeChanged = null;
      this._onTouchpadInput = null;
      this._onWearerHeadingChanged = null;
    }
    
    /**
    * Returns the device audio level.
    * @returns {number} The device audio level.
    **/
    get audioLevel() {
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
    * Registers a provided function to be called when the audio level changes.
    */
    onAudioLevelChanged(callback) {
      this._onAudioLevelChanged = callback;
    }
    
    /**
    * Registers a provided function to be called when the button input changes.
    */
    onButtonInput(callback) {
      this._onButtonInput = callback;
    }
    
    /**
    * Registers a provided function to be called when the low power status changes.
    */
    onLowPowerChange(callback) {
      this._onLowPowerChange = callback;
    }
    
    /**
    * Registers a provided function to be called when the mode changes.
    */
    onModeChanged(callback) {
      this._onModeChanged = callback;
    }
    
    /**
    * Registers a provided function to be called when the touchpad input changes.
    */
    onTouchpadInput(callback) {
      this._onTouchpadInput = callback;
    }
    
    /**
    * Registers a provided function to be called when the wearer heading changes.
    */
    onWearerHeadingChanged(callback) {
      this._onWearerHeadingChanged = callback;
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
  
  class UtilityClass extends DeviceApi {
    constuctor(options) {
      super(options);
    }
    
    simulateOnAudioLevelChanged(level) {
      this._onAudioLevelChanged(level);
    }
    
    simulateOnButtonInput(buttonInput) {
      this._onButtonInput(buttonInput);
    }
    
    simulateOnLowPowerChange(isLowPower) {
      this._onLowPowerChange(isLowPower);
    }
    
    simulateOnModeChanged(mode) {
      this._onModeChanged(mode);
    }
    
    simulateOnTouchpadInput(inputArray) {
      this._onTouchpadInput(inputArray);
    }
    
    simulateOnWearerHeadingChanged(heading) {
      this._onWearerHeadingChanged(heading);
    }
    
    set audioLevel(value) {
      this._audioLevel = value;
    }
    
    set lowPower(value) {
      this._lowPower = value;
    }
  }
  
  var test = new DeviceApi('empty');
  var level = test.audioLevel;

});
