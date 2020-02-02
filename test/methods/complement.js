
/* IMPORT */

import {describe} from 'ava-spec';
import {complement} from '../../dist';

/* COMPLEMENT */

describe ( 'complement', it => {

  it ( 'returns the complementary color', t => {

    const tests = [
      ['#6b717f', 'hsl(42, 8.547008547%, 45.8823529412%)'],
      ['#d2e1dd', 'hsl(344, 20%, 85.2941176471%)'],
      ['#036', 'hsl(30, 100%, 20%)']
    ];

    tests.forEach ( ([ color, output ]) => {
      t.is ( complement ( color ), output );
    });

  });

});
