import { NextRequest } from "next/server"

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: Step 1 done\n\n`))
      setTimeout(() => controller.enqueue(encoder.encode(`data: Step 2 done\n\n`)), 1000)
      setTimeout(() => {
        controller.enqueue(encoder.encode(`data: Finished\n\n`))
        controller.close()
      }, 2000)
    }
  })
  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    }
  })
}