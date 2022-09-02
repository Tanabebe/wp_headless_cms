// メニューに使うインターフェース
export default interface BasicMenuModel {
  menuTitle: string
  subMenuItems: SubMenuItems[]
}

interface SubMenuItems {
  menuTitle: string
  linkUrl: string
}
