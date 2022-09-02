import { CMS_NAME, CMS_URL } from '../lib/constants'
import { css } from '@emotion/react'

const style = css`
  color: hotpink;
  text-align: center;
  margin: 0 auto;
`

export default function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1
        css={style}
        className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'
      >
        Testing Blog.
      </h1>
    </section>
  )
}
