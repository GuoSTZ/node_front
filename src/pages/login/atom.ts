import { atom } from "jotai"

export const encryptionConfigAtom = atom<{publicKey?: string}>({});

export const pinCodeAtom = atom<string>('');