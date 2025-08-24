"use client"

import Link from "next/link"
import { Image } from "@heroui/react"

export const Logo = () => {
  return (
    <div className="w-[135px] flex items-center justify-between cursor-pointer">
      <Link href='/admin'>
        <div className="drivelink-img w-[42px]">
          <Image src="drivelink-icon.png" alt="Drivelink icon" />
        </div>
      </Link>
      <Link href='/admin'>
        <span className="text-[20px] text-[#2E396D] font-[500]">Drivelink</span>
      </Link>
    </div>
  )
}
