"use client";

import { StateCreator, create } from "zustand";

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

const contactModalStore: StateCreator<ContactModalState> = (set) => ({
  ...initialState,
  setIsOpen: (isOpen) => set({ isOpen }),
});

const useContactModalStore = create<ContactModalState>()(contactModalStore);

export const useIsOpenContactModal = () => useContactModalStore((s) => s.isOpen);
export const useSetIsOpenContactModal = () => useContactModalStore((s) => s.setIsOpen);
