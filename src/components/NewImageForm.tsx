import { useState, ChangeEvent, FormEvent } from "react"
import { Configuration, OpenAIApi } from "openai"
import { PlusCircle } from "phosphor-react"

import { ImageProps } from "../App"

import styles from "./NewImageForm.module.css"

interface NewImageFormProps {
  createNewImageList: (newImagesList: ImageProps[]) => void
}

export function NewImageForm({ createNewImageList }: NewImageFormProps) {
  const [imageDescription, setImageDescription] = useState("")

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const hasNoDescription = imageDescription.length === 0

  function handleImageDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setImageDescription(event.target.value)
  }

  async function handleNewTaskForm(event: FormEvent) {
    event.preventDefault()

    const { data } = await openai.createImage({
      prompt: imageDescription,
      n: 6,
      size: "256x256",
      user: "ArtifyWebpage",
    })

    const newImageList = data.data.map((info) => {
      return { source: info.url } as ImageProps
    })

    createNewImageList(newImageList)
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
