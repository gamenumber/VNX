// Generated by CoffeeScript 1.12.7
(function() {
  var Component_TilingPlane,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Component_TilingPlane = (function(superClass) {
    extend(Component_TilingPlane, superClass);


    /**
    * A tiling plane component tiles the image of the game object endless over the screen. The
    * tiling can be vertical, horizontal or both. The sprite can be managed or
    * unmanaged. A managed sprite is automatically added to the graphics-system
    * and processed every frame until it gets disposed. An unmanaged sprite needs
    * to be added and removed manually.
    *
    * @module gs
    * @class Component_TilingPlane
    * @extends gs.Component_Sprite
    * @memberof gs
    * @constructor
    * @param {boolean} managed - Indicates if the sprite is managed by the graphics system.
     */

    function Component_TilingPlane(managed) {
      this.sprite = null;
      this.tilingPlane = null;
      this.tilingSprite = this.sprite;
      this.image = null;
      this.video = null;
      this.imageFolder = "Graphics/Pictures";
      this.visible = true;
      this.looping = {
        vertical: false,
        horizontal: false
      };
    }


    /**
    * Creates sprite object.
    *
    * @method setupSprite
     */

    Component_TilingPlane.prototype.setupSprite = function() {
      if (!this.sprite) {
        this.sprite = new gs.Sprite(Graphics.viewport, typeof managed !== "undefined" && managed !== null ? managed : true);
        return this.tilingSprite = this.sprite;
      }
    };


    /**
    * Updates the padding.
    *
    * @method updatePadding
     */

    Component_TilingPlane.prototype.updatePadding = function() {
      if (this.object.padding != null) {
        this.sprite.rect.x += this.object.padding.left;
        this.sprite.rect.y += this.object.padding.top;
        this.sprite.rect.width -= this.object.padding.left + this.object.padding.right;
        return this.sprite.rect.height -= this.object.padding.bottom + this.object.padding.bottom;
      }
    };


    /**
    * Updates the source- and destination-rectangle of the game object so that
    * the associated bitmap fits in. 
    *
    * @method updateRect
     */

    Component_TilingPlane.prototype.updateRect = function() {
      if (this.sprite.bitmap != null) {
        this.object.srcRect = new Rect(0, 0, this.sprite.bitmap.width, this.sprite.bitmap.height);
        this.object.dstRect.width = this.object.srcRect.width;
        return this.object.dstRect.height = this.object.srcRect.height;
      }
    };


    /**
    * Updates the sprite properties from the game object properties.
    *
    * @method updateProperties
     */

    Component_TilingPlane.prototype.updateProperties = function() {
      Component_TilingPlane.__super__.updateProperties.call(this);
      this.sprite.vertical = this.looping.vertical;
      this.sprite.horizontal = this.looping.horizontal;
      this.sprite.x = this.object.dstRect.x;
      return this.sprite.y = this.object.dstRect.y;
    };


    /**
    * Updates the optional sprite properties from the game object properties.
    * @method updateOptionalProperties
     */

    Component_TilingPlane.prototype.updateOptionalProperties = function() {
      Component_TilingPlane.__super__.updateOptionalProperties.call(this);
      this.sprite.zoomX = this.object.zoom.x;
      return this.sprite.zoomY = this.object.zoom.y;
    };


    /**
    * Updates the tiling-plane component by updating its visibility, image, padding and
    * properties. To save performance, a gs.TilingPlane is only used if looping is enabled. Otherwise
    * a regular sprite is used.
    * @method update
     */

    Component_TilingPlane.prototype.update = function() {
      if (this.tilingSprite && (this.looping.vertical || this.looping.horizontal)) {
        this.tilingSprite.dispose();
        this.tilingPlane = new gs.TilingPlane(null, this.tilingSprite.managed);
        this.tilingSprite = null;
        this.sprite = this.tilingPlane;
        this.image = null;
      }
      if (this.tilingPlane && !(this.looping.vertical || this.looping.horizontal)) {
        this.tilingPlane.dispose();
        this.tilingSprite = new gs.Sprite(null, this.tilingPlane.managed);
        this.tilingPlane = null;
        this.sprite = this.tilingSprite;
        this.image = null;
      }
      return Component_TilingPlane.__super__.update.apply(this, arguments);
    };

    return Component_TilingPlane;

  })(gs.Component_Sprite);

  gs.Component_TilingPlane = Component_TilingPlane;

}).call(this);
