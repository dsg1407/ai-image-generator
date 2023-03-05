import { useState, ChangeEvent, FormEvent } from "react"
import { PlusCircle } from "phosphor-react"

import styles from "./NewImageForm.module.css"

export function NewImageForm() {
  const [imageDescription, setImageDescription] = useState("")

  const hasNoDescription = imageDescription.length === 0

  function handleImageDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setImageDescription(event.target.value)
  }

  function handleNewTaskForm(event: FormEvent) {
    event.preventDefault()

    // createNewTask(task)
    setImageDescription("")
  }

  return (
    <form className={styles.form} onSubmit={handleNewTaskForm}>
      <input
        type="text"
        placeholder="What do you want to create ?"
        value={imageDescription}
        onChange={handleImageDescriptionChange}
        required
      />
      <button type="submit" disabled={hasNoDescription}>
        Create
        <PlusCircle size={21.34} />
      </button>
    </form>
  )
}
