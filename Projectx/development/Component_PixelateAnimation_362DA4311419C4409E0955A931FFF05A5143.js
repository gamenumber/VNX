var Component_PixelateAnimation,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component_PixelateAnimation = (function(superClass) {
  extend(Component_PixelateAnimation, superClass);


  /**
  * Executes a pixelate-animation on a game-object.
  *
  * @module gs
  * @class Component_PixelateAnimation
  * @extends gs.Component_Animation
  * @memberof gs
  * @constructor
   */

  function Component_PixelateAnimation(data) {
    Component_PixelateAnimation.__super__.constructor.apply(this, arguments);

    /**
    * The easing-object used for the animation.
    * @property easing
    * @type gs.Easing
     */
    this.widthEasing = new gs.Easing(null, data != null ? data.widthEasing : void 0);
    this.heightEasing = new gs.Easing(null, data != null ? data.heightEasing : void 0);
  }


  /**
  * Updates the blend-animation.
  *
  * @method update
   */

  Component_PixelateAnimation.prototype.update = function() {
    Component_PixelateAnimation.__super__.update.apply(this, arguments);
    if (!this.widthEasing.isRunning && !this.heightEasing.isRunning) {
      return;
    }
    this.widthEasing.updateValue();
    this.heightEasing.updateValue();
    this.object.effects.pixelate.width = this.widthEasing.value;
    this.object.effects.pixelate.height = this.heightEasing.value;
    if (!this.widthEasing.isRunning && !this.heightEasing.isRunning) {
      return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
    }
  };


  /**
  * Starts the pixelate-animation.
  *
  * @method start
  * @param {number} power The target power.
  * @param {number} duration The duration in frames.
  * @param {Object} easingType The easing-type.
  * @param {function} [callback] An optional callback called if the animation is finished.
   */

  Component_PixelateAnimation.prototype.start = function(width, height, duration, easingType, callback) {
    this.callback = callback;
    this.widthEasing.type = easingType || gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN];
    this.heightEasing.type = easingType || gs.Easings.EASE_LINEAR[gs.EasingTypes.EASE_IN];
    if (this.object.effects.pixelate.width === width && this.object.effects.pixelate.height === height) {
      return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
    }
    if (duration === 0 || this.isInstantSkip()) {
      this.object.effects.pixelate.width = width;
      this.object.effects.pixelate.height = height;
      return typeof this.callback === "function" ? this.callback(this.object, this) : void 0;
    } else {
      this.widthEasing.startValue(this.object.effects.pixelate.width, width - this.object.effects.pixelate.width, duration);
      return this.heightEasing.startValue(this.object.effects.pixelate.height, height - this.object.effects.pixelate.height, duration);
    }
  };

  return Component_PixelateAnimation;

})(gs.Component_Animation);

gs.Component_PixelateAnimation = Component_PixelateAnimation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLElBQUEsMkJBQUE7RUFBQTs7O0FBQU07Ozs7QUFDRjs7Ozs7Ozs7OztFQVNhLHFDQUFDLElBQUQ7SUFDVCw4REFBQSxTQUFBOztBQUVBOzs7OztJQUtBLElBQUMsQ0FBQSxXQUFELEdBQW1CLElBQUEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxJQUFWLGlCQUFnQixJQUFJLENBQUUsb0JBQXRCO0lBQ25CLElBQUMsQ0FBQSxZQUFELEdBQW9CLElBQUEsRUFBRSxDQUFDLE1BQUgsQ0FBVSxJQUFWLGlCQUFnQixJQUFJLENBQUUscUJBQXRCO0VBVFg7OztBQVdiOzs7Ozs7d0NBS0EsTUFBQSxHQUFRLFNBQUE7SUFDSix5REFBQSxTQUFBO0lBQ0EsSUFBRyxDQUFDLElBQUMsQ0FBQSxXQUFXLENBQUMsU0FBZCxJQUE0QixDQUFDLElBQUMsQ0FBQSxZQUFZLENBQUMsU0FBOUM7QUFBNkQsYUFBN0Q7O0lBRUEsSUFBQyxDQUFBLFdBQVcsQ0FBQyxXQUFiLENBQUE7SUFDQSxJQUFDLENBQUEsWUFBWSxDQUFDLFdBQWQsQ0FBQTtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUF6QixHQUFpQyxJQUFDLENBQUEsV0FBVyxDQUFDO0lBQzlDLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUF6QixHQUFrQyxJQUFDLENBQUEsWUFBWSxDQUFDO0lBRWhELElBQUcsQ0FBQyxJQUFDLENBQUEsV0FBVyxDQUFDLFNBQWQsSUFBNEIsQ0FBQyxJQUFDLENBQUEsWUFBWSxDQUFDLFNBQTlDO21EQUNJLElBQUMsQ0FBQSxTQUFVLElBQUMsQ0FBQSxRQUFRLGVBRHhCOztFQVRJOzs7QUFZUjs7Ozs7Ozs7Ozt3Q0FTQSxLQUFBLEdBQU8sU0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixRQUFoQixFQUEwQixVQUExQixFQUFzQyxRQUF0QztJQUNILElBQUMsQ0FBQSxRQUFELEdBQVk7SUFDWixJQUFDLENBQUEsV0FBVyxDQUFDLElBQWIsR0FBb0IsVUFBQSxJQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBWSxDQUFBLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBZjtJQUN6RCxJQUFDLENBQUEsWUFBWSxDQUFDLElBQWQsR0FBcUIsVUFBQSxJQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBWSxDQUFBLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBZjtJQUMxRCxJQUFHLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUF6QixLQUFrQyxLQUFsQyxJQUE0QyxJQUFDLENBQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBekIsS0FBbUMsTUFBbEY7QUFBOEYsbURBQU8sSUFBQyxDQUFBLFNBQVUsSUFBQyxDQUFBLFFBQVEsZUFBekg7O0lBRUEsSUFBRyxRQUFBLEtBQVksQ0FBWixJQUFpQixJQUFDLENBQUEsYUFBRCxDQUFBLENBQXBCO01BQ0ksSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQXpCLEdBQWlDO01BQ2pDLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUF6QixHQUFrQzttREFDbEMsSUFBQyxDQUFBLFNBQVUsSUFBQyxDQUFBLFFBQVEsZUFIeEI7S0FBQSxNQUFBO01BS0ksSUFBQyxDQUFBLFdBQVcsQ0FBQyxVQUFiLENBQXdCLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFqRCxFQUF3RCxLQUFBLEdBQVEsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQXpGLEVBQWdHLFFBQWhHO2FBQ0EsSUFBQyxDQUFBLFlBQVksQ0FBQyxVQUFkLENBQXlCLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFsRCxFQUEwRCxNQUFBLEdBQVMsSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQTVGLEVBQW9HLFFBQXBHLEVBTko7O0VBTkc7Ozs7R0EvQytCLEVBQUUsQ0FBQzs7QUE2RDdDLEVBQUUsQ0FBQywyQkFBSCxHQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIiMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuI1xuIyAgIFNjcmlwdDogQ29tcG9uZW50X1BpeGVsYXRlQW5pbWF0aW9uXG4jXG4jICAgJCRDT1BZUklHSFQkJFxuI1xuIyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jbGFzcyBDb21wb25lbnRfUGl4ZWxhdGVBbmltYXRpb24gZXh0ZW5kcyBncy5Db21wb25lbnRfQW5pbWF0aW9uXG4gICAgIyMjKlxuICAgICogRXhlY3V0ZXMgYSBwaXhlbGF0ZS1hbmltYXRpb24gb24gYSBnYW1lLW9iamVjdC5cbiAgICAqXG4gICAgKiBAbW9kdWxlIGdzXG4gICAgKiBAY2xhc3MgQ29tcG9uZW50X1BpeGVsYXRlQW5pbWF0aW9uXG4gICAgKiBAZXh0ZW5kcyBncy5Db21wb25lbnRfQW5pbWF0aW9uXG4gICAgKiBAbWVtYmVyb2YgZ3NcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICMjI1xuICAgIGNvbnN0cnVjdG9yOiAoZGF0YSkgLT5cbiAgICAgICAgc3VwZXJcbiAgICAgICAgXG4gICAgICAgICMjIypcbiAgICAgICAgKiBUaGUgZWFzaW5nLW9iamVjdCB1c2VkIGZvciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICAqIEBwcm9wZXJ0eSBlYXNpbmdcbiAgICAgICAgKiBAdHlwZSBncy5FYXNpbmdcbiAgICAgICAgIyMjXG4gICAgICAgIEB3aWR0aEVhc2luZyA9IG5ldyBncy5FYXNpbmcobnVsbCwgZGF0YT8ud2lkdGhFYXNpbmcpXG4gICAgICAgIEBoZWlnaHRFYXNpbmcgPSBuZXcgZ3MuRWFzaW5nKG51bGwsIGRhdGE/LmhlaWdodEVhc2luZylcbiAgICAgICAgXG4gICAgIyMjKlxuICAgICogVXBkYXRlcyB0aGUgYmxlbmQtYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgIyMjICAgXG4gICAgdXBkYXRlOiAtPlxuICAgICAgICBzdXBlclxuICAgICAgICBpZiAhQHdpZHRoRWFzaW5nLmlzUnVubmluZyBhbmQgIUBoZWlnaHRFYXNpbmcuaXNSdW5uaW5nIHRoZW4gcmV0dXJuXG5cbiAgICAgICAgQHdpZHRoRWFzaW5nLnVwZGF0ZVZhbHVlKClcbiAgICAgICAgQGhlaWdodEVhc2luZy51cGRhdGVWYWx1ZSgpXG4gICAgICAgIEBvYmplY3QuZWZmZWN0cy5waXhlbGF0ZS53aWR0aCA9IEB3aWR0aEVhc2luZy52YWx1ZVxuICAgICAgICBAb2JqZWN0LmVmZmVjdHMucGl4ZWxhdGUuaGVpZ2h0ID0gQGhlaWdodEVhc2luZy52YWx1ZVxuICAgICAgICBcbiAgICAgICAgaWYgIUB3aWR0aEVhc2luZy5pc1J1bm5pbmcgYW5kICFAaGVpZ2h0RWFzaW5nLmlzUnVubmluZ1xuICAgICAgICAgICAgQGNhbGxiYWNrPyhAb2JqZWN0LCB0aGlzKVxuIFxuICAgICMjIypcbiAgICAqIFN0YXJ0cyB0aGUgcGl4ZWxhdGUtYW5pbWF0aW9uLlxuICAgICpcbiAgICAqIEBtZXRob2Qgc3RhcnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3dlciBUaGUgdGFyZ2V0IHBvd2VyLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGR1cmF0aW9uIFRoZSBkdXJhdGlvbiBpbiBmcmFtZXMuXG4gICAgKiBAcGFyYW0ge09iamVjdH0gZWFzaW5nVHlwZSBUaGUgZWFzaW5nLXR5cGUuXG4gICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIEFuIG9wdGlvbmFsIGNhbGxiYWNrIGNhbGxlZCBpZiB0aGUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkLiBcbiAgICAjIyMgIFxuICAgIHN0YXJ0OiAod2lkdGgsIGhlaWdodCwgZHVyYXRpb24sIGVhc2luZ1R5cGUsIGNhbGxiYWNrKSAtPlxuICAgICAgICBAY2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgICBAd2lkdGhFYXNpbmcudHlwZSA9IGVhc2luZ1R5cGUgfHwgZ3MuRWFzaW5ncy5FQVNFX0xJTkVBUltncy5FYXNpbmdUeXBlcy5FQVNFX0lOXVxuICAgICAgICBAaGVpZ2h0RWFzaW5nLnR5cGUgPSBlYXNpbmdUeXBlIHx8IGdzLkVhc2luZ3MuRUFTRV9MSU5FQVJbZ3MuRWFzaW5nVHlwZXMuRUFTRV9JTl1cbiAgICAgICAgaWYgQG9iamVjdC5lZmZlY3RzLnBpeGVsYXRlLndpZHRoID09IHdpZHRoIGFuZCBAb2JqZWN0LmVmZmVjdHMucGl4ZWxhdGUuaGVpZ2h0ID09IGhlaWdodCB0aGVuIHJldHVybiBAY2FsbGJhY2s/KEBvYmplY3QsIHRoaXMpXG4gICAgICAgIFxuICAgICAgICBpZiBkdXJhdGlvbiA9PSAwIG9yIEBpc0luc3RhbnRTa2lwKClcbiAgICAgICAgICAgIEBvYmplY3QuZWZmZWN0cy5waXhlbGF0ZS53aWR0aCA9IHdpZHRoXG4gICAgICAgICAgICBAb2JqZWN0LmVmZmVjdHMucGl4ZWxhdGUuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICAgICBAY2FsbGJhY2s/KEBvYmplY3QsIHRoaXMpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIEB3aWR0aEVhc2luZy5zdGFydFZhbHVlKEBvYmplY3QuZWZmZWN0cy5waXhlbGF0ZS53aWR0aCwgd2lkdGggLSBAb2JqZWN0LmVmZmVjdHMucGl4ZWxhdGUud2lkdGgsIGR1cmF0aW9uKVxuICAgICAgICAgICAgQGhlaWdodEVhc2luZy5zdGFydFZhbHVlKEBvYmplY3QuZWZmZWN0cy5waXhlbGF0ZS5oZWlnaHQsIGhlaWdodCAtIEBvYmplY3QuZWZmZWN0cy5waXhlbGF0ZS5oZWlnaHQsIGR1cmF0aW9uKVxuICAgICAgICBcbmdzLkNvbXBvbmVudF9QaXhlbGF0ZUFuaW1hdGlvbiA9IENvbXBvbmVudF9QaXhlbGF0ZUFuaW1hdGlvbiJdfQ==
//# sourceURL=Component_PixelateAnimation_162.js