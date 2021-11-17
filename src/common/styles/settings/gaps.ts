import { pxToRem } from 'common/functions'

export enum GapsSizes {
  xxs = 1,
  xs = 3,
  s = 5,
  m = 10,
  l = 15,
  xl = 20,
  xxl = 35,
  xxxl = 60,
  xxxxl = 100,
  xxxxxl = 150,
  xxxxxxl = 200,
  xxxxxxxl = 300
}

export const gaps = {
  xxs: pxToRem(GapsSizes.xxs),
  xs: pxToRem(GapsSizes.xs),
  s: pxToRem(GapsSizes.s),
  m: pxToRem(GapsSizes.m),
  l: pxToRem(GapsSizes.l),
  xl: pxToRem(GapsSizes.xl),
  xxl: pxToRem(GapsSizes.xxl),
  xxxl: pxToRem(GapsSizes.xxxl),
  xxxxl: pxToRem(GapsSizes.xxxxl),
  xxxxxl: pxToRem(GapsSizes.xxxxxl),
  xxxxxxl: pxToRem(GapsSizes.xxxxxxl),
  xxxxxxxl: pxToRem(GapsSizes.xxxxxxxl)
}
