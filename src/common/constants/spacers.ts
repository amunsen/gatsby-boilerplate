import { gaps } from '../styles/settings'
import { T_Padding } from 'common/types'

export const spacers: { [key in T_Padding]: string } = {
  xs: gaps.xs,
  s: gaps.m,
  m: gaps.l,
  l: gaps.xl,
  xl: gaps.xxl,
  xxl: gaps.xxxl,
  xxxl: gaps.xxxxl
}
