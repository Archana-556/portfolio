// Enhanced Code execution functions
function runCode(sectionNumber) {
  const outputElement = document.getElementById(`output${sectionNumber}`)

  // Clear previous output and show loading
  outputElement.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i> Running code...</div>'

  setTimeout(() => {
    switch (sectionNumber) {
      case 1:
        runArrayMethods(outputElement)
        break
      case 2:
        runDOMManipulation(outputElement)
        break
      case 3:
        runAsyncAwait(outputElement)
        break
      case 4:
        runObjectDestructuring(outputElement)
        break
      case 5:
        runCSSAnimation(outputElement)
        break
      case 6:
        runLocalStorage(outputElement)
        break
      case 7:
        runFormValidation(outputElement)
        break
      case 8:
        runAPIFetch(outputElement)
        break
      case 9:
        runEventHandling(outputElement)
        break
      case 10:
        runDataStructures(outputElement)
        break
    }
  }, 800)
}

function clearOutput(sectionNumber) {
  const outputElement = document.getElementById(`output${sectionNumber}`)
  outputElement.innerHTML = `
    <div class="output-placeholder">
      <i class="fas fa-play-circle"></i>
      <p>Click "Run Code" to see the output</p>
    </div>
  `
}

function runArrayMethods(outputElement) {
  const numbers = [1, 2, 3, 4, 5]
  const doubled = numbers.map((n) => n * 2)
  const evens = numbers.filter((n) => n % 2 === 0)
  const sum = numbers.reduce((acc, n) => acc + n, 0)

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line"><span class="output-label">Original:</span> [${numbers.join(", ")}]</div>
      <div class="output-line"><span class="output-label">Doubled:</span> [${doubled.join(", ")}]</div>
      <div class="output-line"><span class="output-label">Evens:</span> [${evens.join(", ")}]</div>
      <div class="output-line"><span class="output-label">Sum:</span> ${sum}</div>
      <div class="output-success">✅ Code executed successfully!</div>
    </div>
  `
}

function runDOMManipulation(outputElement) {
  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57"]

  let colorBoxesHTML = '<div class="color-demo">'
  for (let i = 0; i < 6; i++) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    colorBoxesHTML += `<div class="color-box" style="background-color: ${randomColor}; animation-delay: ${i * 0.1}s;"></div>`
  }
  colorBoxesHTML += "</div>"

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">🎨 Dynamic color boxes created!</div>
      ${colorBoxesHTML}
      <div class="output-success">✅ DOM manipulation complete!</div>
    </div>
  `
}

function runAsyncAwait(outputElement) {
  outputElement.innerHTML = '<div class="console-output"><div class="output-line">⏳ Fetching user data...</div></div>'

  // Simulate API call
  function fetchUserData(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: userId,
          name: `Archana Anand`,
          email: `archana@example.com`,
          role: "Full Stack Developer",
        })
      }, 1500)
    })
  }

  async function displayUser() {
    try {
      const user = await fetchUserData(123)
      outputElement.innerHTML = `
        <div class="console-output">
          <div class="output-line">✅ User data fetched successfully!</div>
          <div class="user-card">
            <div class="output-line"><span class="output-label">ID:</span> ${user.id}</div>
            <div class="output-line"><span class="output-label">Name:</span> ${user.name}</div>
            <div class="output-line"><span class="output-label">Email:</span> ${user.email}</div>
            <div class="output-line"><span class="output-label">Role:</span> ${user.role}</div>
          </div>
          <div class="output-success">✅ Async/Await working perfectly!</div>
        </div>
      `
    } catch (error) {
      outputElement.innerHTML = `
        <div class="console-output">
          <div class="output-error">❌ Error: ${error.message}</div>
        </div>
      `
    }
  }

  displayUser()
}

function runObjectDestructuring(outputElement) {
  const person = {
    name: "Archana Anand",
    age: 25,
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
    },
  }

  const { name, age, skills } = person
  const { city, state } = person.address
  const [firstSkill, ...otherSkills] = skills

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line"><span class="output-label">Name:</span> ${name}</div>
      <div class="output-line"><span class="output-label">Age:</span> ${age}</div>
      <div class="output-line"><span class="output-label">Location:</span> ${city}, ${state}</div>
      <div class="output-line"><span class="output-label">Primary Skill:</span> ${firstSkill}</div>
      <div class="output-line"><span class="output-label">Other Skills:</span> ${otherSkills.join(", ")}</div>
      <div class="output-success">✅ Destructuring completed!</div>
    </div>
  `
}

function runCSSAnimation(outputElement) {
  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">🎭 CSS Animation Demo</div>
      <div class="animation-demo">
        <div class="bouncing-ball"></div>
        <div class="pulse-circle"></div>
        <div class="rotating-square"></div>
      </div>
      <div class="output-success">✅ Animations are running!</div>
    </div>
  `
}

function runLocalStorage(outputElement) {
  const userData = {
    name: "Archana",
    theme: "dark",
    lastVisit: new Date().toISOString(),
    projects: 15,
  }

  localStorage.setItem("demoUserData", JSON.stringify(userData))
  const savedData = JSON.parse(localStorage.getItem("demoUserData"))

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">💾 Data saved to localStorage</div>
      <div class="storage-demo">
        <div class="output-line"><span class="output-label">Name:</span> ${savedData.name}</div>
        <div class="output-line"><span class="output-label">Theme:</span> ${savedData.theme}</div>
        <div class="output-line"><span class="output-label">Projects:</span> ${savedData.projects}</div>
        <div class="output-line"><span class="output-label">Last Visit:</span> ${new Date(savedData.lastVisit).toLocaleString()}</div>
      </div>
      <div class="output-success">✅ LocalStorage working perfectly!</div>
    </div>
  `
}

function runFormValidation(outputElement) {
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function validateForm(formData) {
    const errors = []

    if (!formData.name || formData.name.length < 2) {
      errors.push("Name must be at least 2 characters")
    }

    if (!validateEmail(formData.email)) {
      errors.push("Please enter a valid email")
    }

    if (!formData.password || formData.password.length < 6) {
      errors.push("Password must be at least 6 characters")
    }

    return errors
  }

  const testData = {
    name: "A",
    email: "invalid-email",
    password: "123",
  }

  const errors = validateForm(testData)

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">🔍 Validating form data...</div>
      <div class="validation-demo">
        <div class="output-line"><span class="output-label">Test Data:</span></div>
        <div class="output-line">• Name: "${testData.name}"</div>
        <div class="output-line">• Email: "${testData.email}"</div>
        <div class="output-line">• Password: "${testData.password}"</div>
      </div>
      <div class="validation-errors">
        <div class="output-line"><span class="output-label">Validation Errors:</span></div>
        ${errors.map((error) => `<div class="output-error">❌ ${error}</div>`).join("")}
      </div>
      <div class="output-success">✅ Form validation complete!</div>
    </div>
  `
}

function runAPIFetch(outputElement) {
  outputElement.innerHTML =
    '<div class="console-output"><div class="output-line">🌐 Fetching users from API...</div></div>'

  const mockApiResponse = {
    users: [
      { id: 1, name: "Archana Anand", role: "Full Stack Developer", status: "active" },
      { id: 2, name: "John Doe", role: "Frontend Developer", status: "active" },
      { id: 3, name: "Jane Smith", role: "Backend Developer", status: "active" },
    ],
  }

  setTimeout(() => {
    const users = mockApiResponse.users

    outputElement.innerHTML = `
      <div class="console-output">
        <div class="output-line">✅ Users fetched successfully!</div>
        <div class="api-demo">
          ${users
            .map(
              (user) => `
              <div class="user-item">
                <div class="output-line">👤 <span class="output-label">${user.name}</span> - ${user.role}</div>
                <div class="status-badge status-${user.status}">${user.status}</div>
              </div>
            `,
            )
            .join("")}
        </div>
        <div class="output-success">✅ API integration working!</div>
      </div>
    `
  }, 1200)
}

function runEventHandling(outputElement) {
  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">🖱️ Interactive buttons created!</div>
      <div class="event-demo">
        <button class="demo-btn" onclick="handleDemoClick(this, 1)">Click Me! (0)</button>
        <button class="demo-btn" onclick="handleDemoClick(this, 2)">Click Me! (0)</button>
        <button class="demo-btn" onclick="handleDemoClick(this, 3)">Click Me! (0)</button>
      </div>
      <div class="output-success">✅ Event handlers attached!</div>
    </div>
  `
}

function handleDemoClick(button, buttonId) {
  const currentCount = Number.parseInt(button.textContent.match(/$$(\d+)$$/)[1]) + 1
  button.textContent = `Clicked ${currentCount} times! (${currentCount})`

  // Change button style based on click count
  if (currentCount % 3 === 0) {
    button.className = "demo-btn btn-success"
  } else if (currentCount % 2 === 0) {
    button.className = "demo-btn btn-warning"
  } else {
    button.className = "demo-btn btn-primary"
  }
}

function runDataStructures(outputElement) {
  class Stack {
    constructor() {
      this.items = []
    }

    push(item) {
      this.items.push(item)
    }

    pop() {
      return this.items.pop()
    }

    peek() {
      return this.items[this.items.length - 1]
    }

    isEmpty() {
      return this.items.length === 0
    }
  }

  const stack = new Stack()
  stack.push("React")
  stack.push("Node.js")
  stack.push("MongoDB")

  const poppedItem = stack.pop()

  outputElement.innerHTML = `
    <div class="console-output">
      <div class="output-line">📚 Stack Implementation Demo</div>
      <div class="stack-demo">
        <div class="output-line"><span class="output-label">Operations:</span></div>
        <div class="output-line">• push("React")</div>
        <div class="output-line">• push("Node.js")</div>
        <div class="output-line">• push("MongoDB")</div>
        <div class="output-line">• pop() → ${poppedItem}</div>
      </div>
      <div class="stack-state">
        <div class="output-line"><span class="output-label">Current Stack:</span> [${stack.items.join(", ")}]</div>
        <div class="output-line"><span class="output-label">Top Element:</span> ${stack.peek()}</div>
        <div class="output-line"><span class="output-label">Is Empty:</span> ${stack.isEmpty()}</div>
      </div>
      <div class="output-success">✅ Data structure working perfectly!</div>
    </div>
  `
}

// Profile Card Demo Functions
function showContact() {
  alert("📧 Contact: archana.anand@email.com\n📱 Phone: +91-XXXXXXXXXX")
}

// Dashboard Animation Functions
function animateDashboard() {
  // Animate numbers
  document.querySelectorAll(".stat-number").forEach((el) => {
    const target = Number.parseInt(el.dataset.target)
    let current = 0
    const increment = target / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      el.textContent = Math.floor(current)
    }, 40)
  })

  // Animate progress bars
  setTimeout(() => {
    document.querySelectorAll(".progress-fill").forEach((el) => {
      el.style.width = el.dataset.width + "%"
    })
  }, 500)
}

// Todo App Functions
function addTask() {
  const input = document.getElementById("taskInput")
  const text = input.value.trim()

  if (text === "") return

  const todoList = document.getElementById("todoList")
  const todoItem = document.createElement("div")
  todoItem.className = "todo-item"
  todoItem.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)">
        <span>${text}</span>
        <button onclick="deleteTask(this)">×</button>
    `

  todoList.appendChild(todoItem)
  input.value = ""
  updateStats()

  // Add animation
  todoItem.style.opacity = "0"
  todoItem.style.transform = "translateX(-20px)"
  setTimeout(() => {
    todoItem.style.transition = "all 0.3s ease"
    todoItem.style.opacity = "1"
    todoItem.style.transform = "translateX(0)"
  }, 10)
}

function toggleTask(checkbox) {
  const todoItem = checkbox.parentElement
  if (checkbox.checked) {
    todoItem.classList.add("completed")
  } else {
    todoItem.classList.remove("completed")
  }
  updateStats()
}

function deleteTask(button) {
  const todoItem = button.parentElement
  todoItem.style.transform = "translateX(100%)"
  todoItem.style.opacity = "0"
  setTimeout(() => {
    todoItem.remove()
    updateStats()
  }, 300)
}

function updateStats() {
  const total = document.querySelectorAll(".todo-item").length
  const completed = document.querySelectorAll(".todo-item.completed").length

  const totalEl = document.getElementById("totalTasks")
  const completedEl = document.getElementById("completedTasks")

  if (totalEl) totalEl.textContent = total
  if (completedEl) completedEl.textContent = completed
}

// Weather Widget Functions
function refreshWeather() {
  // Simulate API call
  const temps = [22, 24, 26, 28, 25, 23]
  const humidity = [60, 65, 70, 55, 62, 68]
  const wind = [10, 12, 15, 8, 11, 14]

  const randomTemp = temps[Math.floor(Math.random() * temps.length)]
  const randomHumidity = humidity[Math.floor(Math.random() * humidity.length)]
  const randomWind = wind[Math.floor(Math.random() * wind.length)]

  const tempEl = document.getElementById("temp")
  const humidityEl = document.getElementById("humidity")
  const windEl = document.getElementById("wind")

  if (tempEl) tempEl.textContent = randomTemp
  if (humidityEl) humidityEl.textContent = randomHumidity + "%"
  if (windEl) windEl.textContent = randomWind + " km/h"

  // Add refresh animation
  const widget = document.querySelector(".weather-widget")
  if (widget) {
    widget.style.transform = "scale(0.95)"
    setTimeout(() => {
      widget.style.transform = "scale(1)"
    }, 150)
  }
}

// Auto-initialize all demos when page loads
document.addEventListener("DOMContentLoaded", () => {
  // Initialize stats for todo app
  updateStats()

  // Add enter key support for todo input
  const taskInput = document.getElementById("taskInput")
  if (taskInput) {
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask()
      }
    })
  }

  // Auto-start dashboard animation after a delay
  setTimeout(() => {
    animateDashboard()
  }, 1000)

  // Restart dashboard animation every 10 seconds
  setInterval(() => {
    // Reset numbers to 0
    document.querySelectorAll(".stat-number").forEach((el) => {
      el.textContent = "0"
    })

    // Reset progress bars
    document.querySelectorAll(".progress-fill").forEach((el) => {
      el.style.width = "0%"
    })

    // Restart animation
    setTimeout(animateDashboard, 500)
  }, 10000)

  // Add enhanced styling for output
  const style = document.createElement("style")
  style.textContent = `
      .console-output {
        font-family: 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
        padding: 10px;
      }
      
      .output-line {
        margin: 8px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .output-label {
        color: var(--success-color);
        font-weight: bold;
      }
      
      .output-success {
        color: #4CAF50;
        font-weight: bold;
        margin-top: 15px;
        padding: 8px;
        background: rgba(76, 175, 80, 0.1);
        border-radius: 4px;
        border-left: 3px solid #4CAF50;
      }
      
      .output-error {
        color: #f44336;
        font-weight: bold;
        margin: 5px 0;
        padding: 8px;
        background: rgba(244, 67, 54, 0.1);
        border-radius: 4px;
        border-left: 3px solid #f44336;
      }
      
      .loading-spinner {
        text-align: center;
        padding: 20px;
        color: var(--success-color);
      }
      
      .output-placeholder {
        text-align: center;
        padding: 30px;
        color: var(--text-muted);
        opacity: 0.7;
      }
      
      .output-placeholder i {
        font-size: 2rem;
        margin-bottom: 10px;
        display: block;
      }
      
      .color-demo {
        display: flex;
        gap: 10px;
        margin: 15px 0;
        flex-wrap: wrap;
      }
      
      .color-box {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        animation: bounceIn 0.6s ease-out both;
      }
      
      .animation-demo {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin: 20px 0;
        padding: 20px;
        background: rgba(0, 255, 65, 0.05);
        border-radius: 8px;
      }
      
      .bouncing-ball {
        width: 30px;
        height: 30px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border-radius: 50%;
        animation: bounce 2s infinite;
      }
      
      .pulse-circle {
        width: 30px;
        height: 30px;
        background: linear-gradient(45deg, #45b7d1, #96ceb4);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }
      
      .rotating-square {
        width: 30px;
        height: 30px;
        background: linear-gradient(45deg, #feca57, #ff9ff3);
        animation: rotate 2s linear infinite;
      }
      
      .user-card, .storage-demo, .validation-demo, .api-demo, .stack-demo, .stack-state {
        background: rgba(0, 255, 65, 0.05);
        padding: 15px;
        border-radius: 8px;
        margin: 10px 0;
        border-left: 3px solid var(--success-color);
      }
      
      .user-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid rgba(0, 255, 65, 0.1);
      }
      
      .status-badge {
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: bold;
      }
      
      .status-active {
        background: rgba(76, 175, 80, 0.2);
        color: #4CAF50;
      }
      
      .event-demo {
        display: flex;
        gap: 10px;
        margin: 15px 0;
        flex-wrap: wrap;
      }
      
      .demo-btn {
        padding: 8px 16px;
        border: 1px solid var(--success-color);
        background: transparent;
        color: var(--success-color);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Courier New', monospace;
        font-size: 12px;
      }
      
      .demo-btn:hover {
        background: var(--success-color);
        color: var(--bg-primary);
      }
      
      .btn-success {
        background: #4CAF50 !important;
        border-color: #4CAF50 !important;
        color: white !important;
      }
      
      .btn-warning {
        background: #FF9800 !important;
        border-color: #FF9800 !important;
        color: white !important;
      }
      
      .btn-primary {
        background: #2196F3 !important;
        border-color: #2196F3 !important;
        color: white !important;
      }
      
      @keyframes bounceIn {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1.1); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-15px); }
        60% { transform: translateY(-8px); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.7; }
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `
  document.head.appendChild(style)
})
