import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import BasicMenu from './basic-menu'
import IBasicMenu from '../interface/i-basic-menu-model'
import { url } from 'inspector'

const hoge: IBasicMenu = {
  menuItems: [
    {
      title: 'Home',
      subMenuItems: [
        {
          menuTitle: 'sub1',
          linkUrl: "https://google.com"
        },
        {
          menuTitle: 'sub2',
          linkUrl: "https://google.com"
        }
      ]
    },
    {
      title: 'Menu',
      subMenuItems: []
    }
  ],
}

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className='py-2 text-center text-sm'>
          {preview ? (
            <>
              This is a page preview.{' '}
              <a
                href='/api/exit-preview'
                className='underline hover:text-cyan duration-200 transition-colors'
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              <BasicMenu {...hoge}/>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
