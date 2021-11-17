export interface I_Image {
  filename: string
  alt: string
}

export type T_Padding = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'

export interface I_Component {
  spacingTop: T_Padding
  spacingBottom: T_Padding
}

export interface I_ComponentSettings {
  settings?: {
    classes?: string
    isReverse?: boolean
    isInline?: boolean
  }
}
