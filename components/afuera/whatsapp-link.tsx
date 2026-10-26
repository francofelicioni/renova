"use client"

import type React from "react"
import { WHATSAPP_URL } from "@/lib/afuera"
import { trackEvent } from "@/lib/tracking"

type Props = {
  className?: string
  source: string
  children: React.ReactNode
}

export default function WhatsappLink({ className, source, children }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("Contact", { content_name: `whatsapp_${source}` })}
    >
      {children}
    </a>
  )
}
