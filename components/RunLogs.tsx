import { useEffect, useState } from "react"

export function RunLogs({ runId }: { runId: string }) {
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    const eventSource = new EventSource(`/api/langflow/runs/${runId}/stream`)
    eventSource.onmessage = (event) => {
      setLogs((prev) => [...prev, event.data])
    }
    return () => eventSource.close()
  }, [runId])

  return (
    <div style={{ background: "#f3f3f3", padding: "1em", borderRadius: 8, minHeight: 100 }}>
      <h3>Message Logs</h3>
      {logs.length === 0 && <div>Waiting for logs...</div>}
      {logs.map((log, idx) => (
        <div key={idx}>{log}</div>
      ))}
    </div>
  )
}