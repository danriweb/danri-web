export type DocumentFileType = "pdf" | "docs";

export interface DocumentFile {
  id: string;
  name: string;
  type: DocumentFileType;
  url: string;
  folderId: string | null;
  size?: string;
  date?: string;
}

export interface DocumentFolder {
  id: string;
  name: string;
  parentId?: string | null;
}
