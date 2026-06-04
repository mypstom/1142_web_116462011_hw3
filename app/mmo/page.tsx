"use client"

import { useEffect, useState } from "react"
import { database } from "@/lib/firebase"
import { ref, push, onValue, set } from "firebase/database"

type Message = {
  id: string
  name: string
  text: string
}

export default function MMO() {

  const [score, setScore] = useState(0);


  useEffect(() => {
    const scoreRef = ref(database, "score");

    const subscribe = onValue(scoreRef, (snapshot)=>{
      const data = snapshot.val();
      console.log("score", data);
      setScore(data);
    });


  }, []);


  const handleScore = (value: any) => {
    const scoreRef = ref(database, "score");
    set(scoreRef, score + value);
  }


  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="relative flex gap-6 items-center justify-center">
        <div 
          className="w-[80px] h-[80px] bg-green-200 flex items-center justify-center rounded-2xl cursor-pointer"
          onClick = { ()=> handleScore(-1) }
        >減分</div>
        <div className="w-[80px] h-[80px] text-2xl font-bold bg-gray-300 flex items-center justify-center rounded-2xl">{score}</div>
        <div 
          className="w-[80px] h-[80px] bg-amber-200 flex items-center justify-center rounded-2xl cursor-pointer"
          onClick = { ()=> handleScore(1) }
        >加分</div>
      </div>
    </div>
  )
}