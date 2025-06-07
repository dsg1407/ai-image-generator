import { useState, ChangeEvent, FormEvent } from "react"
import { GoogleGenAI, MediaResolution, Modality } from "@google/genai";
import { PlusCircle } from "phosphor-react"

import { ImageProps } from "../App"

import styles from "./NewImageForm.module.css"

interface NewImageFormProps {
  createNewImageList: (newImagesList: ImageProps[]) => void
  changeLoadingStatus: (status: boolean) => void
}

export function NewImageForm({
  createNewImageList,
  changeLoadingStatus,
}: NewImageFormProps) {
  const [imageDescription, setImageDescription] = useState("")

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY })

  const hasNoDescription = imageDescription.length === 0

  function handleImageDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setImageDescription(event.target.value)
  }

  async function handleNewTaskForm(event: FormEvent) {
    event.preventDefault()

    changeLoadingStatus(true)
    setImageDescription("")

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: imageDescription,
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      if (response.candidates && response.candidates[0].content?.parts) {
        const newImageList = response.candidates[0].content.parts.map((info) => {
          if (info.text) return
          return { source: info.inlineData?.data }
        }).filter(info => !!info) as ImageProps[]

        createNewImageList(newImageList)
        changeLoadingStatus(false)
      }

    } catch (err) {
      createNewImageList([])
      changeLoadingStatus(false)
    }
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
