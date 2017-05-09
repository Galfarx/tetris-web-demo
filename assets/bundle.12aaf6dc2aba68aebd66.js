webpackJsonp([0],[,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={GAME_WIDTH:160,GAME_HEIGHT:256,BLOCK_SIDE_LENGTH:16,BOARD_WIDTH:10,BOARD_HEIGHT:16,NUMBER_OF_COLORS:7,COLOR_BLUE:0,COLOR_CYAN:1,COLOR_GREEN:2,COLOR_ORANGE:3,COLOR_PURPLE:4,COLOR_RED:5,COLOR_YELLOW:6,NUMBER_OF_BLOCKS_IN_SHAPE:4,NUMBER_OF_SHAPE_TYPES:7,NUMBER_OF_SHAPE_ORIENTATIONS:4,MOVE_DOWN:0,MOVE_RIGHT:1,MOVE_LEFT:2}},,,,function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(e){function t(e){var n=e.game,r=e.x,a=e.y,l=e.asset,u=e.callback,c=e.callbackContext,h=e.overFrame,f=e.outFrame,p=e.downFrame,d=e.upFrame,y=e.label,b=e.style;o(this,t);var w=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n,r,a,l,u,c,h,f,p,d));return w.anchor.setTo(.5),w.label=y,w.style=b,w.text=new s.default.Text(w.game,0,0,w.label,w.style),w.text.anchor.setTo(.5),w.addChild(w.text),w}return r(t,e),t}(s.default.Button);t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),l=o(s),u=n(15),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(u),h=n(1),f=o(h),p=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,f.default.GAME_WIDTH,f.default.GAME_HEIGHT,l.default.AUTO,"content",null));return Object.keys(c).forEach(function(t){return e.state.add(t,c[t])}),e.state.start("Boot"),e}return a(t,e),t}(l.default.Game);t.default=p},function(e,t,n){"use strict";n(2),n(3);var o=n(6),i=function(e){return e&&e.__esModule?e:{default:e}}(o);window.Tetris={game:new i.default}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),s=o(a),l=n(1),u=o(l),c=function(){function e(){i(this,e),this.x=null,this.y=null,this.color=null,this.sprite=null}return r(e,[{key:"createBlock",value:function(e,t,n){this.x=e,this.y=t,this.color=n;var o=this.getSpriteLocation();this.sprite=window.Tetris.game.add.sprite(o.x,o.y,"block",this.color)}},{key:"clean",value:function(){this.x=null,this.y=null,this.color=null,this.sprite.destroy(),this.sprite=null}},{key:"getSpriteLocation",value:function(){return{x:this.x*u.default.BLOCK_SIDE_LENGTH,y:this.y*u.default.BLOCK_SIDE_LENGTH}}},{key:"moveBlock",value:function(e,t){this.x=e,this.y=t;var n=this.getSpriteLocation(),o=s.default.Easing.Quadratic.In;this.tween=window.Tetris.game.add.tween(this.sprite).to(n,55,o,!1,0,0,!1),this.tween.start()}}]),e}();t.default=c},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),s=o(a),l=n(1),u=o(l),c=n(8),h=o(c),f=function(){function e(){i(this,e),this.type=null,this.orientation=null,this.color=null,this.centerX=null,this.centerY=null,this.shape=null,this.blocks=[],this.isTweening=!1,this.tweenCounter=0,this.onBlockOccupied=new s.default.Signal}return r(e,[{key:"createRandomShape",value:function(){this.type=Math.floor(Math.random()*u.default.NUMBER_OF_SHAPE_TYPES),this.orientation=Math.floor(Math.random()*u.default.NUMBER_OF_SHAPE_ORIENTATIONS),this.color=Math.floor(Math.random()*u.default.NUMBER_OF_COLORS),this.initBlocks()}},{key:"initBlocks",value:function(){for(var e=0;e<u.default.NUMBER_OF_BLOCKS_IN_SHAPE;e++)this.blocks[e]=new h.default}},{key:"activate",value:function(){var e=void 0,t=void 0;this.shape=window.Tetris.shapes[this.type],this.centerX=this.shape.orientation[this.orientation].startingLocation.x,this.centerY=this.shape.orientation[this.orientation].startingLocation.y;for(var n=0;n<this.blocks.length;n++)e=this.centerX+this.shape.orientation[this.orientation].blockPosition[n].x,t=this.centerY+this.shape.orientation[this.orientation].blockPosition[n].y,this.blocks[n].createBlock(e,t,this.color)}},{key:"clearActive",value:function(){this.type=null,this.orientation=null,this.color=null,this.centerX=null,this.centerY=null,this.blocks=null}},{key:"updateTween",value:function(){this.tweenCounter>10&&(this.isTweening=!1,this.tweenCounter=0),this.tweenCounter++}},{key:"rotate",value:function(){if(!this.canRotate()){throw{msg:"Cannot rotate active shape"}}for(var e=void 0,t=void 0,n=(this.orientation+1)%u.default.NUMBER_OF_SHAPE_ORIENTATIONS,o=0;o<this.blocks.length;o++)e=this.centerX+this.shape.orientation[n].blockPosition[o].x,t=this.centerY+this.shape.orientation[n].blockPosition[o].y,this.blocks[o].moveBlock(e,t);this.orientation=n,this.isTweening=!0}},{key:"canRotate",value:function(){if(this.isTweening)return!1;for(var e=void 0,t=void 0,n=(this.orientation+1)%u.default.NUMBER_OF_SHAPE_ORIENTATIONS,o=0;o<this.blocks.length;o++)if(e=this.centerX+this.shape.orientation[n].blockPosition[o].x,t=this.centerY+this.shape.orientation[n].blockPosition[o].y,!this.isOnBoard(e,t)||this.isOccupied(e,t))return!1;return!0}},{key:"placeShapeInBoard",value:function(){for(var e=void 0,t=0;t<this.blocks.length;t++)e=this.blocks[t],this.isOccupied(e.x,e.y)&&this.onBlockOccupied.dispatch(),window.Tetris.board[e.y][e.x]=this.blocks[t]}},{key:"moveShape",value:function(e){if(!this.canMoveShape(e)){throw{msg:"Cannot move active shape in direction: "+e}}for(var t=void 0,n=void 0,o=0;o<this.blocks.length;o++){switch(e){case u.default.MOVE_DOWN:t=this.blocks[o].x,n=this.blocks[o].y+1;break;case u.default.MOVE_LEFT:t=this.blocks[o].x-1,n=this.blocks[o].y;break;case u.default.MOVE_RIGHT:t=this.blocks[o].x+1,n=this.blocks[o].y}this.blocks[o].moveBlock(t,n)}switch(e){case u.default.MOVE_DOWN:this.centerX+=0,this.centerY+=1;break;case u.default.MOVE_LEFT:this.centerX+=-1,this.centerY+=0;break;case u.default.MOVE_RIGHT:this.centerX+=1,this.centerY+=0}}},{key:"canMoveShape",value:function(e){for(var t=void 0,n=void 0,o=0;o<this.blocks.length;o++){switch(e){case u.default.MOVE_DOWN:t=this.blocks[o].x,n=this.blocks[o].y+1;break;case u.default.MOVE_LEFT:t=this.blocks[o].x-1,n=this.blocks[o].y;break;case u.default.MOVE_RIGHT:t=this.blocks[o].x+1,n=this.blocks[o].y}if(!this.isOnBoard(t,n)||this.isOccupied(t,n))return!1}return!0}},{key:"isOnBoard",value:function(e,t){return e>=0&&t>=0&&e<u.default.BOARD_WIDTH&&t<u.default.BOARD_HEIGHT}},{key:"isOccupied",value:function(e,t){return null!==window.Tetris.board[t][e]}}]),e}();t.default=f},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"init",value:function(){this.game.stage.backgroundColor="#000",this.scale.scaleMode=l.default.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.game.physics.startSystem(l.default.Physics.ARCADE)}},{key:"create",value:function(){this.state.start("Preload")}}]),t}(l.default.State);t.default=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=o(l),c=n(5),h=o(c),f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"init",value:function(){this.game.stage.backgroundColor="#000",this.scale.scaleMode=u.default.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.game.physics.startSystem(u.default.Physics.ARCADE)}},{key:"create",value:function(){var e=this;this.title=new u.default.Text(this.game,this.game.world.centerX,this.game.world.centerY-40,"Simple Tetris",{font:"18px Verdana",fill:"white",align:"center"}),this.title.anchor.setTo(.5),this.start=new h.default({game:this.game,x:this.game.world.centerX,y:this.game.world.centerY,asset:null,overFrame:null,outFrame:null,downFrame:null,upFrame:null,label:"Start",style:{font:"10px Verdana",fill:"white",align:"center"}}),this.source=new h.default({game:this.game,x:this.game.world.centerX,y:this.game.world.centerY+20,asset:null,overFrame:null,outFrame:null,downFrame:null,upFrame:null,label:"View source code",style:{font:"10px Verdana",fill:"white",align:"center"}}),this.start.onInputUp.add(function(){e.state.start("Play")}),this.source.onInputUp.add(function(){window.open("https://github.com/Galfarx/tetris-web-demo","_blank")}),this.menuPanel=this.add.group(),this.menuPanel.add(this.title),this.menuPanel.add(this.start),this.menuPanel.add(this.source)}}]),t}(u.default.State);t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=o(l),c=n(5),h=o(c),f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"init",value:function(){this.game.stage.backgroundColor="#000",this.scale.scaleMode=u.default.ScaleManager.SHOW_ALL,this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.game.physics.startSystem(u.default.Physics.ARCADE)}},{key:"create",value:function(){var e=this;this.title=new u.default.Text(this.game,this.game.world.centerX,this.game.world.centerY-40,"Game Over",{font:"18px Verdana",fill:"white",align:"center"}),this.title.anchor.setTo(.5),this.start=new h.default({game:this.game,x:this.game.world.centerX,y:this.game.world.centerY,asset:null,overFrame:null,outFrame:null,downFrame:null,upFrame:null,label:"Play again",style:{font:"10px Verdana",fill:"white",align:"center"}}),this.menu=new h.default({game:this.game,x:this.game.world.centerX,y:this.game.world.centerY+20,asset:null,overFrame:null,outFrame:null,downFrame:null,upFrame:null,label:"Menu",style:{font:"10px Verdana",fill:"white",align:"center"}}),this.start.onInputUp.add(function(){e.state.start("Play")}),this.menu.onInputUp.add(function(){e.state.start("Menu")}),this.menuPanel=this.add.group(),this.menuPanel.add(this.title),this.menuPanel.add(this.start),this.menuPanel.add(this.menu)}}]),t}(u.default.State);t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=o(l),c=n(9),h=o(c),f=n(1),p=o(f),d=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"init",value:function(){this.cursors=this.game.input.keyboard.createCursorKeys()}},{key:"create",value:function(){window.Tetris.shapesJSON=this.game.cache.getJSON("shapes"),window.Tetris.shapes=window.Tetris.shapesJSON.shapes,window.Tetris.board=new Array(p.default.BOARD_HEIGHT);for(var e=0;e<p.default.BOARD_HEIGHT;e++){window.Tetris.board[e]=new Array(this.BOARD_WIDTH);for(var t=0;t<p.default.BOARD_WIDTH;t++)window.Tetris.board[e][t]=null}this.turnLength=60,this.turnCounter=0,this.completedRows=[],this.isUpdatingAfterRowClear=!1,this.nextShape=new h.default,this.nextShape.createRandomShape(),this.activeShape=new h.default,this.activeShape.createRandomShape(),this.activeShape.activate()}},{key:"update",value:function(){this.turnCounter>=this.turnLength?(null!==this.activeShape&&this.activeShape.canMoveShape(p.default.MOVE_DOWN)?this.activeShape.moveShape(p.default.MOVE_DOWN):(this.activeShape.placeShapeInBoard(),this.completedRows=this.getCompleteRows(),this.completedRows.length>0?(this.clearRow(this.completedRows),this.isUpdatingAfterRowClear=!0):this.promoteShapes(),this.completedRows=[]),this.turnCounter=0):this.isUpdatingAfterRowClear?this.turnCounter>=this.turnLength/10?(this.isUpdatingAfterRowClear=!1,this.promoteShapes()):this.turnCounter++:(this.handleInput(),this.turnCounter++)}},{key:"handleInput",value:function(){this.activeShape.isTweening?this.activeShape.updateTween():this.cursors.up.isDown?this.activeShape.canRotate()&&this.activeShape.rotate():this.cursors.left.isDown?this.activeShape.canMoveShape(p.default.MOVE_LEFT)&&(this.activeShape.moveShape(p.default.MOVE_LEFT),this.activeShape.isTweening=!0):this.cursors.right.isDown?this.activeShape.canMoveShape(p.default.MOVE_RIGHT)&&(this.activeShape.moveShape(p.default.MOVE_RIGHT),this.activeShape.isTweening=!0):this.cursors.down.isDown&&(this.turnCounter+=this.turnLength/5)}},{key:"promoteShapes",value:function(){this.activeShape.onBlockOccupied.has(this.gameOver)&&this.activeShape.onBlockOccupied.remove(this.gameOver),this.activeShape=null,this.activeShape=this.nextShape,this.activeShape.onBlockOccupied.add(this.gameOver),this.activeShape.activate(),this.nextShape=new h.default,this.nextShape.createRandomShape()}},{key:"getCompleteRows",value:function(){for(var e=[],t=0;t<window.Tetris.board.length;t++)this.isRowFull(t)&&e.push(t);return e}},{key:"isRowFull",value:function(e){for(var t=0;t<window.Tetris.board[e].length;t++)if(null===window.Tetris.board[e][t])return!1;return!0}},{key:"clearRow",value:function(e){for(var t=void 0,n=void 0,o=0,i=e.length-1;i>=0;i--){n=e[i]+o,t=window.Tetris.board[n];for(var r=0;r<t.length;r++)window.Tetris.board[n][r].clean(),window.Tetris.board[n][r]=null;this.dropRowsAbove(n-1),o++}}},{key:"dropRowsAbove",value:function(e){for(var t=void 0,n=e;n>=0;n--)for(var o=0;o<window.Tetris.board[n].length;o++)null!==(t=window.Tetris.board[n][o])&&(window.Tetris.board[n][o].moveBlock(t.x,t.y+1),window.Tetris.board[n+1][o]=window.Tetris.board[n][o],window.Tetris.board[n][o]=null)}},{key:"gameOver",value:function(){window.Tetris.game.state.start("Over")}}]),t}(u.default.State);t.default=d},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(0),u=o(l),c=n(1),h=o(c),f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"preload",value:function(){this.load.spritesheet("block","assets/blocks_spritesheet.png",h.default.BLOCK_SIDE_LENGTH,h.default.BLOCK_SIDE_LENGTH),this.load.image("background","assets/background.png"),this.load.json("shapes","assets/shapes.json")}},{key:"create",value:function(){this.state.start("Menu")}}]),t}(u.default.State);t.default=f},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(10);Object.defineProperty(t,"Boot",{enumerable:!0,get:function(){return o(i).default}});var r=n(14);Object.defineProperty(t,"Preload",{enumerable:!0,get:function(){return o(r).default}});var a=n(11);Object.defineProperty(t,"Menu",{enumerable:!0,get:function(){return o(a).default}});var s=n(13);Object.defineProperty(t,"Play",{enumerable:!0,get:function(){return o(s).default}});var l=n(12);Object.defineProperty(t,"Over",{enumerable:!0,get:function(){return o(l).default}})}],[7]);
//# sourceMappingURL=bundle.12aaf6dc2aba68aebd66.js.map