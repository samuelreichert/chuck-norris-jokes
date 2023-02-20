import { FC, PropsWithChildren } from 'react'
import { styled } from '@/stitches.config'

export const Box: FC<PropsWithChildren> = ({ children }) => {
  return <BoxStyled>{children}</BoxStyled>
}

const BoxStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})
