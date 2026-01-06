export type TreeNode = {
  label: string
  children: TreeNode[]
  icon?: any // Optional icon component
  // added TreeNode[] due to enforcement that dynamic key types should accommodate all static key types
  [nodeKey: string]: string | number | TreeNode[] | any
}

export type TreeOptions = {
  rowHeight?: string
  indentWidth?: string
  showIndentationGuides?: boolean
  defaultCollapsed?: boolean
}

export interface TreeProps {
  node: TreeNode
  nodeKey: string
  options?: TreeOptions
}
