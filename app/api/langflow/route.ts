import { NextResponse } from "next/server"

export async function GET() {
  // TODO: Replace with real run history from your workflow engine or DB
  const mockRuns = [
    {
      id: "email-1",
      workflowId: "email",
      status: "completed",
      duration: 2.1,
      flowName: "Email Agent",
      startedAt: Date.now() - 3000,
      finishedAt: Date.now() - 1000,
    },
    // ...more runs
  ]
  return NextResponse.json(mockRuns)
}