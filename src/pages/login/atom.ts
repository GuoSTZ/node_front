import { atom } from "jotai"

export const encryptionConfigAtom = atom<{publicKey?: string}>({});