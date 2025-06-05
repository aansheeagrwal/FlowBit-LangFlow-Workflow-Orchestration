import { NextRequest, NextResponse } from "next/server"
import { addCronJob, loadCronJobs } from "@/lib/cron"
import fs from "fs"
import path from "path"

const CRON_JOBS_FILE = path.join(process.cwd(), "cron-jobs.json")

export async function GET() {
  // List all cron jobs
  let jobs = []
  if (fs.existsSync(CRON_JOBS_FILE)) {
    jobs = JSON.parse(fs.readFileSync(CRON_JOBS_FILE, "utf-8"))
  }
  return NextResponse.json(jobs)
}

export async function POST(req: NextRequest) {
  // Add a new cron job
  const { cronExpr, workflowId, inputPayload } = await req.json()
  addCronJob(cronExpr, workflowId, inputPayload)
  return NextResponse.json({ status: "scheduled" })
}