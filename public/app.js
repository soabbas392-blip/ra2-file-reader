* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #111827;
  color: #e5e7eb;
}

.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 0 16px 60px;
}

header {
  margin-bottom: 24px;
}

header h1 {
  margin: 0 0 8px;
  font-size: 2.2rem;
}

header p {
  margin: 0;
  color: #9ca3af;
}

.panel {
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
}

.stack {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

input, button {
  border-radius: 8px;
  border: 1px solid #4b5563;
  padding: 10px 12px;
  font-size: 1rem;
}

input {
  background: #0f172a;
  color: #f8fafc;
  min-width: 250px;
  flex: 1;
}

button {
  background: #2563eb;
  color: white;
  cursor: pointer;
  border: none;
}

button:hover {
  background: #1d4ed8;
}

.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.file-list, .results, .ini-preview {
  display: grid;
  gap: 10px;
}

.file-item, .result-item, .section-box {
  background: #0f172a;
  border: 1px solid #374151;
  border-radius: 8px;
  padding: 12px;
}

.file-item, .result-item {
  cursor: pointer;
}

.hidden {
  display: none;
}

.summary-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.summary-badge {
  background: #0f172a;
  border: 1px solid #374151;
  border-radius: 999px;
  padding: 8px 12px;
}

.section-box h3 {
  margin-top: 0;
}

.entry-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
  padding: 6px 0;
  border-top: 1px solid #1f2937;
}

.entry-row .key {
  color: #93c5fd;
  font-weight: 700;
}

.entry-row .value {
  color: #d1d5db;
}

.error {
  color: #fca5a5;
}
