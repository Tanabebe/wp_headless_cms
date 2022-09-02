import { css } from '@emotion/react'
const containerStyled = css`
  max-width: 1244px;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
`
export default function Container({ children }) {
  return <div css={containerStyled}>{children}</div>
}
