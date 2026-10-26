// Eventos del pixel de Meta. Si el pixel no cargó, no hace nada.

type Fbq = (command: "track", event: string, params?: Record<string, unknown>) => void

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return
  const fbq = (window as unknown as { fbq?: Fbq }).fbq
  fbq?.("track", event, params)
}
