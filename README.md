# 🚀 FlowBit-LangFlow-Workflow-Orchestration

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## 🎯 **Overview**

Welcome to **FlowBit-LangFlow-Workflow-Orchestration** — a powerful multi-agent workflow orchestration system that combines:

- **LangFlow** for visual workflow building 🖼️  
- **FlowBit** for automation and orchestration 🤖

Process emails, JSON, PDFs, and classify data dynamically! Run workflows manually, via webhooks, or on cron schedules — all with **real-time log streaming** on a sleek Next.js + Shadcn UI frontend.

---

## ✨ **Features**
(1) Multi-agent system with specialized Python agents:
 - Email agent 📧
 - JSON agent 🗂️
 - PDF agent 📄
 - Classifier agent 🧠
(2) Visual workflow creation and orchestration using LangFlow 🖥️
(3) Backend API powered by FastAPI for agent management and data handling ⚡
(4) Modern, responsive Next.js frontend using Shadcn UI for smooth user interaction 🎯
(5) Persistent memory with SQLite for context and state management 🗄️
(6) Real-time scheduling and automation via cron jobs ⏳
(7) Dockerized environment for easy setup and deployment 🐳

---
### 🛠️ Getting Started
Prerequisites:-
-> Python 3.8+
-> Node.js 16+
-> Docker & Docker Compose (for running LangFlow and Redis)

## 🛠️ **Setup Instructions**

### 1️⃣ Clone the repo

```bash
git clone https://github.com/aansheeagrwal/FlowBit-LangFlow-Workflow-Orchestration.git
cd FlowBit-LangFlow-Workflow-Orchestration
```
### 2️⃣ Backend Setup
-> Create & activate virtual environment:
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```
-> Install Python dependencies:
```bash
pip install -r requirements.txt
```
### 3️⃣ Frontend Setup
-> Go to frontend folder:
```bash
cd frontend
```
-> Install Node packages:
```bash
npm install
```
-> Start frontend dev server:
```bash
npm run dev
```
Open your browser 👉 http://localhost:3000
### 4️⃣ API Endpoints

| Endpoint                            | Purpose                        |
| ----------------------------------- | ------------------------------ |
| `GET /api/langflow/runs`            | Recent runs                    |
| `GET /api/langflow/runs/:id`        | Full output, metadata          |
| `GET /api/langflow/runs/:id/stream` | **Real-time logs via SSE**     |
| `POST /api/trigger`                 | Manual/cron trigger a workflow |
| `GET /api/hooks/:workflowId`        | Public Webhook endpoint        |
---

### 🔁 Trigger Types
| Type    | Description                             |
| ------- | --------------------------------------- |
| Manual  | Input JSON manually from UI             |
| Webhook | Get a public POST endpoint per workflow |
| Cron    | Use a cron string to auto-trigger       |
---

Backend runs at 👉 http://localhost:8000
---
### 🚀 Usage
(1) Upload sample files from static/ or your own files via the frontend UI
(2) Trigger workflows manually, via webhook, or schedule with cron
(3) Watch live logs streaming on the frontend
(4) Extend or customize agents in the agents/ directory
(5) Visually build or modify workflows using LangFlow

### 🗂️ Project Structure
```plaintext
flowbit-workflow-orchestration/
├── agents/               # 🤖 Python agent scripts (Email, JSON, PDF, Classifier)
├── api/                  # ⚙️ Backend API using FastAPI
├── app/                  # 💻 Next.js frontend with Shadcn UI
│   ├── api/              # 🔌 Custom Next.js API routes
│   ├── components/       # 🎨 React UI components (Modals, Tables, etc.)
│   └── lib/cron.ts       # ⏰ Cron scheduling logic
├── flows/                # 📊 LangFlow JSON flows defining agents' logic
├── memory/               # 🧠 SQLite memory store for persistent data
├── static/               # 📂 Sample input files (emails, JSON, PDFs)
├── utils/                # 🛠️ Helper utilities and parsers
├── docker-compose.yml    # 🐳 Docker Compose for LangFlow + Redis setup
├── requirements.txt      # 📦 Python dependencies
└── README.md             # 📖 This documentation file


```

### ✅ Deliverables Checklist
->  4 LangFlow agent flows saved as .json
->  Flows auto-loaded via LANGFLOW_DEFAULT_FLOWS_PATH
->  Connected frontend with agent sidebar & execution history
->  Manual/Webhook/Cron triggers working
->  Execution modal with live log streaming
---
### 📦 Example Trigger Payload
```json
{
  "workflowId": "pdf",
  "engine": "langflow",
  "triggerType": "manual",
  "inputPayload": {
    "fileUrl": "https://example.com/invoice.pdf"
  }
}
```
### 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open a GitHub issue or submit a pull request.
---
### 🙌 Acknowledgements
- Built with ❤️ using FastAPI, Next.js, LangFlow, and Shadcn UI
- Inspired by modern multi-agent orchestration patterns
  
👩‍💻 Author
Anshi Agarwal
🔗 GitHub | 💼 LinkedIn














