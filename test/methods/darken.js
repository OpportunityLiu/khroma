
/* IMPORT */

import {describe} from 'ava-spec';
import {darken} from '../../dist';

/* DARKEN */

describe ( 'darken', it => {

  it ( 'works', t => {

    const tests = [
      [['hsl(0, 0, 100%)', 0], '#ffffff'],
      [['hsl(0, 0, 100%)', 50], '#808080'],
      [['hsl(0, 0, 100%)', 75], '#404040'],
      [['hsl(0, 0, 100%)', 100], '#000000'],
      [['hsl(0, 0, 50%)', 100], '#000000'],
    ];

    tests.forEach ( ([ args, result ]) => {
      t.is ( darken ( ...args ), result );
    });

  });

  it ( 'expects an amount between 0% and 100%', t => {

    t.throws ( () => darken ( '#000', 200 ) );
    t.throws ( () => darken ( '#000', -10 ) );

  });

});