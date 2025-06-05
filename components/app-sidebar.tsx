"use client"

import { useEffect, useState } from "react"
import AppSidebar from "@/components/app-sidebar"

export default function Page() {
  const [workflows, setWorkflows] = useState([])
  const [folders, setFolders] = useState([
    { id: "unassigned", name: "Unassigned", workflowCount: 0, isDefault: true },
  ])

  useEffect(() => {
    fetch("/api/langflow/flows")
      .then((res) => res.json())
      .then((data) => {
        setWorkflows(data)
        setFolders([{ id: "unassigned", name: "Unassigned", workflowCount: data.length, isDefault: true }])
      })
  }, [])

  return (
    <AppSidebar
      selectedFolder={null}
      onFolderSelect={() => {}}
      onManageFolders={() => {}}
      folders={folders}
      workflows={workflows}
    />
  )
}

// The API route code has been moved to /app/api/langflow/flows/route.ts (or /pages/api/langflow/flows.ts for pages directory).
{
  "workflowId": "email",
  "engine": "langflow",
  "triggerType": "manual",
  "inputPayload": { "some": "input" }
}

app/api/trigger/route.ts

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { workflowId, engine, triggerType, inputPayload } = await req.json()

  // Only handle LangFlow manual triggers for now
  if (engine === "langflow" && triggerType === "manual") {
    // Here you would call your LangFlow backend to start the run
    // For now, just return a mock response
    // TODO: Replace this with actual LangFlow run logic
    return NextResponse.json({
      status: "started",
      workflowId,
      input: inputPayload,
      runId: `${workflowId}-${Date.now()}`
    })
  }

  return NextResponse.json({ error: "Unsupported trigger" }, { status: 400 })
}