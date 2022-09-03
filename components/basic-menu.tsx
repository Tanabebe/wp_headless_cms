import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { css } from '@emotion/react'
import IBasicMenu from '../interface/i-basic-menu-model'
import Box from '@mui/material/Box';

const basicMenuStyled = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

// 渡すもの、tile、中身のオブジェクトを渡す
// MenuModel：メニューとして表示したいオブジェクトの実体
export default function BasicMenu({menuItems}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  console.log(menuItems);

  menuItems.map(v => {
      console.log(v.title)
      v.subMenuItems.map(sv => {
        console.log(sv)
      })
  })

  return (
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {menuItems.map(v =>
          <div css={basicMenuStyled}>
            <Button
                  id='basic-button'
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
            {v.title}
            </Button>
            {v.subMenuItems.length > 1 ? (
                  <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    {v.subMenuItems.map(sub =>
                      <MenuItem onClick={handleClose}>{sub.menuTitle}</MenuItem>
                    )}
                  </Menu>
              ) : (
              <></>
            )}
          </div>
        )}
      </Box>
  )
}
