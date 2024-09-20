export interface ProductCardProps {
  img?: string,
  name: string,
  ratings?: number,
  price: number,
}

export interface InputIconProps {
  type?: string,
  placeholder?: string,
  onChange?: () => void,
  icon: React.ReactElement
}