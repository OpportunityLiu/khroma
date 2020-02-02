
/* IMPORT */

import {describe} from 'ava-spec';
import {change} from '../../dist';
import Color from '../../dist/color';

/* CHANGE */

describe ( 'change', it => {

  it ( 'changes RGBA values', t => {

    const tests = [
      [['rgb(100, 100, 100)', { r: 0 }], 'rgb(0, 100, 100)'],
      [['rgb(100, 100, 100)', { r: 255 }], 'rgb(255, 100, 100)'],
      [['rgb(100, 100, 100)', { r: 100 }], 'rgb(100, 100, 100)'],
      [['rgb(100, 100, 100)', { g: 0 }], 'rgb(100, 0, 100)'],
      [['rgb(100, 100, 100)', { b: 0 }], 'rgb(100, 100, 0)'],
      [['rgb(100, 100, 100)', { r: 50, g: 150 }], 'rgb(50, 150, 100)'],
      [['rgb(100, 100, 100)', { r: 50, g: 150, b: 200 }], 'rgb(50, 150, 200)'],
      [['rgb(100, 100, 100)', { r: 50, g: 150, b: 200, a: 0.5 }], 'rgba(50, 150, 200, 0.5)'],
      [['rgb(100, 100, 100)', { r: 0, g: 0, b: 0, a: 0 }], 'rgba(0, 0, 0, 0)'],
      [['rgba(100, 100, 100, .5)', { g: 0 }], 'rgba(100, 0, 100, 0.5)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( Color.format.rgb.output ( Color.parse ( change ( ...args ) ) ), output );
    });

  });

  it ( 'changes HSLA values', t => {

    const tests = [
      [['hsl(50, 50%, 50%)', { h: 100 }], 'hsl(100, 50%, 50%)'],
      [['hsl(50, 50%, 50%)', { h: 400 }], 'hsl(40, 50%, 50%)'],
      [['hsl(50, 50%, 50%)', { h: 0 }], 'hsl(0, 50%, 50%)'],
      [['hsl(50, 50%, 50%)', { s: 25 }], 'hsl(50, 25%, 50%)'],
      [['hsl(50, 50%, 50%)', { l: 25 }], 'hsl(50, 50%, 25%)'],
      [['hsl(50, 50%, 50%)', { h: 100, s: 75 }], 'hsl(100, 75%, 50%)'],
      [['hsl(50, 50%, 50%)', { h: 100, s: 75, l: 25 }], 'hsl(100, 75%, 25%)'],
      [['hsl(50, 50%, 50%)', { h: 100, s: 75, l: 25, a: 0.5 }], 'hsla(100, 75%, 25%, 0.5)'],
      [['hsl(50, 50%, 50%)', { h: 0, s: 0, l: 0, a: 0 }], 'hsla(0, 0%, 0%, 0)'],
      [['hsla(50, 50%, 50%, 0.5)', { h: 360, s: 100, l: 100, a: 1 }], 'hsl(0, 100%, 100%)']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( Color.format.hsl.output ( Color.parse ( change ( ...args ) ) ), output );
    });

  });

  it ( 'changes alpha', t => {

    const tests = [
      [['rgba(0, 0, 0, 0)', { a: 0.5 }], 'rgba(0, 0, 0, 0.5)'],
      [['hsla(0, 0%, 0%, 0.25)', { a: 0.5 }], 'hsla(0, 0%, 0%, 0.5)'],
      [['rgba(0, 0, 0, 1)', { a: 1 }], '#000000']
    ];

    tests.forEach ( ([ args, output ]) => {
      t.is ( change ( ...args ), output );
    });

  });

  it ( 'throws when setting RGB and HSL channels at the same time', t => {

    const tests = [
      ['#000', { r: 0, h: 0 }],
      ['#000', { g: 0, l: 0 }],
      ['#000', { b: 0, s: 0 }]
    ];

    tests.forEach ( args => {
      t.throws ( () => change ( ...args ), /cannot.*at the same time/i );
    });

  });

});
