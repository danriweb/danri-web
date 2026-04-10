"use client";

import { type StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

interface InitialState {
  isOpen: boolean;
}

interface Actions {
  setIsOpen: (isOpen: boolean) => void;
}

interface ContactModalState extends InitialState, Actions {}

const initialState: InitialState = {
  isOpen: false,
};

const contactModalStore: StateCreator<ContactModalState, [["zustand/devtools", unknown]]> = (set) => ({
  ...initialState,
  setIsOpen: (isOpen) => set({ isOpen }, false, "setIsOpenContactModal"),
});

const useContactModalStore = create<ContactModalState>()(devtools(contactModalStore));

export const useIsOpenContactModal = () => useContactModalStore((s) => s.isOpen);
export const useSetIsOpenContactModal = () => useContactModalStore((s) => s.setIsOpen);
