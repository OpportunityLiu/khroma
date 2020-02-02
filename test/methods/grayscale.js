
/* IMPORT */

import {describe} from 'ava-spec';
import {grayscale} from '../../dist';

/* GRAYSCALE */

describe ( 'grayscale', it => {

  it ( 'returns a gray color with the same lightness', t => {

    const tests = [
      ['#6b717f', 'hsl(222, 0%, 45.8823529412%)'],
      ['#d2e1dd', 'hsl(164, 0%, 85.2941176471%)'],
      ['#036', 'hsl(210, 0%, 20%)']
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( grayscale ( color ), output );
    });

  });

});
