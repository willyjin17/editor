import { ResolvedPos } from 'prosemirror-model';
import { Selection } from 'prosemirror-state';

export type WwNodeType =
  | 'text'
  | 'paragraph'
  | 'heading'
  | 'codeBlock'
  | 'bulletList'
  | 'orderedList'
  | 'listItem'
  | 'table'
  | 'tableHead'
  | 'tableBody'
  | 'tableRow'
  | 'tableHeadCell'
  | 'tableBodyCell'
  | 'blockQuote'
  | 'thematicBreak'
  | 'image'
  | 'hardBreak'
  | 'lineBreak'
  | 'customBlock'
  | 'frontMatter';

export type WwMarkType = 'strong' | 'emph' | 'strike' | 'link' | 'code';

export interface CellSelection extends Selection {
  startCell: ResolvedPos;
  endCell: ResolvedPos;
}

export type ColumnAlign = 'left' | 'right' | 'center';
