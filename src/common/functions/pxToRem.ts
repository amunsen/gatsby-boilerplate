const baseSize = 16

export function pxToRem(pxSize: number) {
  return `${pxSize / baseSize}rem`
}
