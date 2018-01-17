// tslint:disable:ordered-imports
import 'p2';
import 'pixi';
import 'phaser';
// tslint:enable:ordered-imports

import { baseHeight, baseWidth } from './constants';
import { Boot } from './states/Boot';
import { Game } from './states/Game';
import { Menu } from './states/Menu';
import { Preloader } from './states/Preloader';

const game = new Phaser.Game(baseWidth, baseHeight, Phaser.AUTO, '', null);

game.state.add('Boot', Boot);
game.state.add('Preloader', Preloader);
game.state.add('Menu', Menu);
game.state.add('Game', Game);

game.state.start('Boot');
