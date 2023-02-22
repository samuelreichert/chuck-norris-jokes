import { FC, PropsWithChildren } from 'react'
import { styled } from '@/stitches.config'

type ButtonProps = PropsWithChildren & {
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}

const ButtonStyled = styled('button', {
  appearance: 'none',
  background: 'none',
  border: 'none',
  borderBottom: '1px solid $black',
  color: '$black',
  cursor: 'pointer',
  fontSize: 'medium',
  transition: 'opacity $duration ease-in-out',
  '&:hover, &:focus': {
    opacity: '0.5',
  },
})
