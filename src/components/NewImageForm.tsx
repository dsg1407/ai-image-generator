import { useState, ChangeEvent, FormEvent } from "react"
import { v4 as uuidv4 } from "uuid"
import { PlusCircle } from "phosphor-react"

import styles from "./NewImageForm.module.css"

export function NewImageForm() {
  const [taskDescription, setTaskDescription] = useState("")

  const hasNoDescription = taskDescription.length === 0

  function handleTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskDescription(event.target.value)
  }

  function handleNewTaskForm(event: FormEvent) {
    event.preventDefault()

    // createNewTask(task)
    setTaskDescription("")
  }

  return (
    <form className={styles.form} onSubmit={handleNewTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={handleTaskDescriptionChange}
        required
      />
      <button type="submit" disabled={hasNoDescription}>
        Criar
        <PlusCircle size={21.34} />
      </button>
    </form>
  )
}
