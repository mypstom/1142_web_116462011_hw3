"use client"

import { useEffect, useState } from "react"
import { database } from "@/lib/firebase"
import { ref, push, onValue } from "firebase/database"

type Message = {
  id: string
  name: string
  text: string
}

export default function Firebase() {

  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const messagesRef = ref(database, "messages")

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()
      console.log(data)

      if (!data) {
        setMessages([])
        return
      }

      const messageList = Object.entries(data).map(([id, value]) => {
        const message = value as {
          name: string
          text: string
        }

        return {
          id,
          name: message.name,
          text: message.text,
        }
      })

      setMessages(messageList)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name.trim() || !text.trim()) {
      alert("請輸入名字和留言")
      return
    }

    const messagesRef = ref(database, "messages")

    await push(messagesRef, {
      name,
      text,
      createdAt: Date.now(),
    })

    setText("")
  }

  return (
    <div className="mx-auto max-w-xl p-6">
      <h1 className="mb-6 text-2xl font-bold">Firebase 即時留言板</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input
          className="w-full rounded border p-2"
          placeholder="請輸入名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full rounded border p-2"
          placeholder="請輸入留言"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          送出留言
        </button>
      </form>

      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id} className="rounded border p-3 bg-amber-100">
            <p className="font-bold">{message.name}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}