import { DocumentFile, DocumentFolder } from "./types";

export const mockFolders: DocumentFolder[] = [
  { id: "1", name: "Личные документы", parentId: null },
  { id: "2", name: "Рабочие проекты", parentId: null },
  { id: "3", name: "Дизайн-макеты", parentId: "2" },
  { id: "4", name: "Договоры", parentId: "1" },
  { id: "5", name: "Акты", parentId: "4" },
];

export const mockFiles: DocumentFile[] = [
  {
    id: "f1",
    name: "Паспорт.pdf",
    type: "pdf",
    url: "#",
    folderId: "1",
    size: "2.4 MB",
    date: "12 Oct 2025",
  },
  {
    id: "f2",
    name: "Договор_аренды.docx",
    type: "docs",
    url: "#",
    folderId: "4",
    size: "15 KB",
    date: "14 Oct 2025",
  },
  {
    id: "f3",
    name: "ТЗ_Проект_A.docx",
    type: "docs",
    url: "#",
    folderId: "2",
    size: "145 KB",
    date: "01 Nov 2025",
  },
  {
    id: "f4",
    name: "Гайдлайн.pdf",
    type: "pdf",
    url: "#",
    folderId: "3",
    size: "15 MB",
    date: "25 Dec 2025",
  },
  {
    id: "f5",
    name: "Акт_выполненных_работ_01.pdf",
    type: "pdf",
    url: "#",
    folderId: "5",
    size: "100 KB",
    date: "10 Jan 2026",
  },
];
