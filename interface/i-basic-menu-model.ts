// メニューに使うインターフェース
export default interface IBasicMenu {
  menuItems: IBasicMenuItems[]
  // subMenuItems: ISubMenuItems[]
}

interface IBasicMenuItems {
  title: string
  subMenuItems: ISubMenuItems[]
}

interface ISubMenuItems {
  menuTitle: string
  linkUrl: string
}
