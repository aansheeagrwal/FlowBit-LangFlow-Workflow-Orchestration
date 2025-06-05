import cron from "node-cron"
import fs from "fs"
import path from "path"

const CRON_JOBS_FILE = path.join(process.cwd(), "cron-jobs.json")
let jobs: any[] = []

export function loadCronJobs() {
  if (fs.existsSync(CRON_JOBS_FILE)) {
    jobs = JSON.parse(fs.readFileSync(CRON_JOBS_FILE, "utf-8"))
    jobs.forEach(scheduleJob)
  }
}

export function addCronJob(cronExpr: string, workflowId: string, inputPayload: any) {
  const job = { cronExpr, workflowId, inputPayload }
  jobs.push(job)
  fs.writeFileSync(CRON_JOBS_FILE, JSON.stringify(jobs, null, 2))
  scheduleJob(job)
}

function scheduleJob(job: any) {
  cron.schedule(job.cronExpr, () => {
    // Here you would call your triggerLangflowWorkflow or triggerN8nWorkflow
    console.log(`Running scheduled job for workflow ${job.workflowId}`)
    // TODO: Actually trigger the workflow here
  })
}