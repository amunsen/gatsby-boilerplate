import { Transition, Variants } from 'framer-motion'

const transitionLocal: Transition = { ease: 'easeInOut', duration: 0.65 }

export const animation: { layout: Variants } = {
  layout: {
    initial: {
      y: '1%',
      opacity: 0,
      transition: transitionLocal
    },
    in: {
      y: '0%',
      opacity: 1,
      transition: transitionLocal
    },
    exit: {
      opacity: 0,
      y: '-1%',
      transition: transitionLocal
    }
  }
}
