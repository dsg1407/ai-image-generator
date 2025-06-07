import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"
import { ImageProps } from "../App"

import styles from "./Image.module.css"

export function Image({ source }: ImageProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild className={styles.DialogTrigger}>
          <img src={`data:image/png;base64, ${source}`} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.DialogOverlay} />
          <Dialog.Content className={styles.DialogContent}>
            <img src={`data:image/png;base64, ${source}`} />
            <Dialog.Close asChild className={styles.IconButton}>
              <X size={22} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
