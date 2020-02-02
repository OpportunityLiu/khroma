
/* ENUMS */

enum TYPE {
  ALL = 0,
  RGB = 1,
  HSL = 2
};

/* TYPES */

type ALPHA = {
  a: number // Alpha (0~1)
};

type RGB = {
  r: number, // Red (0~255)
  g: number, // Green (0~255)
  b: number // Blue (0~255)
};

type RGBA = RGB & ALPHA;

type HSL = {
  h: number, // Hue (0~360)
  s: number, // Saturation (0~100)
  l: number // Lightness (0~100)
};

type HSLA = HSL & ALPHA;

type CHANNEL = 'r' | 'g' | 'b' | 'h' | 's' | 'l' | 'a';

type CHANNELS = Record<CHANNEL, number>;

/* EXPORT */

export {TYPE, ALPHA, RGB, RGBA, HSL, HSLA, CHANNEL, CHANNELS};
