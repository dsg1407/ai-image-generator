import * as Dialog from "@radix-ui/react-dialog"
import { X } from "phosphor-react"

import styles from "./Image.module.css"

export function Image() {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild className={styles.DialogTrigger}>
          <img src="https://picsum.photos/256/256?random=1" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.DialogOverlay} />
          <Dialog.Content className={styles.DialogContent}>
            <img src="https://picsum.photos/256/256?random=1" />
            <Dialog.Close asChild className={styles.IconButton}>
              <X size={22} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}
