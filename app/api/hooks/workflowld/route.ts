import { NextRequest, NextResponse } from "next/server"

export async function POST(
  req: NextRequest,
  { params }: { params: { workflowId: string } }
) {
  const { workflowId } = params
  const inputPayload = await req.json()

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