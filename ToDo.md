# List of ToDos and improvements

### Code and architecture related improvements:
* write unit tests,
* add `Board` class,
* `Shape` class and `Play` state they both have to many responsibilities now.
They should be spread into mentioned above `Board`, that should take care of setting board, putting shapes into game, check for collisions etc,
*  Find way to remove `onBlockOccupied` event from `Shape` class - for now this is most reasonable way to figure out lose condition, but this shouldn't be a `Shape` responsibility,
* Remove global `Tetris` object as a board reference
___

### Possible future gameplay features
* Add sound effects.
* Preview of next shape.
* Show score points.
* Add particle and little shake effect when shape is placed on board.
* When row is completed instead of simply disappearing it could blow with particle effect.
* Over time, blocks may fall faster.
* Add challenges to game eg: "Place this kind of shape here to get extra points".
* Collectible perks eg:
   * time slows down
   * ability to chose type of next shape
   * remove from board one incomplete row
