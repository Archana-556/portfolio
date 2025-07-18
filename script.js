// Theme Toggle Functionality - Force Dark Theme by Default
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Force dark theme as default - override any saved light theme
  html.setAttribute("data-theme", "dark")
  localStorage.setItem("theme", "dark")
  updateThemeIcon("dark")

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    html.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
    updateThemeIcon(newTheme)

    // Add smooth transition effect
    document.body.style.transition = "all 0.3s ease"
    setTimeout(() => {
      document.body.style.transition = ""
    }, 300)
  })

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i")
    if (theme === "dark") {
      icon.className = "fas fa-sun"
      themeToggle.setAttribute("title", "Switch to Light Mode")
    } else {
      icon.className = "fas fa-moon"
      themeToggle.setAttribute("title", "Switch to Dark Mode")
    }
  }
})

// Resume Functionality - Show in Modal with Download Option
function viewResume() {
  const savedResumeData = localStorage.getItem("resumeFileData")
  const resumeFileName = localStorage.getItem("resumeFileName")
  const savedResumeContent = localStorage.getItem("resumeContent")

  if (savedResumeData && resumeFileName) {
    // Update resume content if available
    if (savedResumeContent) {
      document.getElementById("resumeContent").innerHTML = savedResumeContent
    }

    // Show resume modal
    const resumeModal = new window.bootstrap.Modal(document.getElementById("resumeModal"))
    resumeModal.show()
  } else {
    // No resume exists, show specific message
    showNotification("Wait for some moment, may be owner is updating resume", "info")
  }
}

// Download Resume Function
function downloadResume() {
  const savedResumeData = localStorage.getItem("resumeFileData")
  const resumeFileName = localStorage.getItem("resumeFileName")
  const resumeFileType = localStorage.getItem("resumeFileType")

  if (savedResumeData && resumeFileName) {
    // Create a blob from the saved file data
    const byteCharacters = atob(savedResumeData.split(",")[1])
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: resumeFileType })

    // Create download link
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = resumeFileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    // Clean up the URL
    URL.revokeObjectURL(url)

    showNotification("Resume downloaded successfully!", "success")
  } else {
    showNotification("No resume available for download", "error")
  }
}

// Show Update Resume Modal from Footer
function showUpdateResumeModal() {
  const updateModal = new window.bootstrap.Modal(document.getElementById("updateResumeModal"))

  // Reset modal state
  document.getElementById("passcodeSection").style.display = "block"
  document.getElementById("updateOptions").style.display = "none"
  document.getElementById("uploadSection").style.display = "none"
  document.getElementById("editSection").style.display = "none"
  document.getElementById("passcodeInput").value = ""
  document.getElementById("verifyBtn").style.display = "inline-block"
  document.getElementById("saveUpdateBtn").style.display = "none"
  document.getElementById("backBtn").style.display = "none"

  updateModal.show()
}

// Verify Passcode for Update
function verifyPasscode() {
  const passcode = document.getElementById("passcodeInput").value
  const correctPasscode = "Archu@08"

  if (passcode === correctPasscode) {
    // Show update options
    document.getElementById("passcodeSection").style.display = "none"
    document.getElementById("updateOptions").style.display = "block"
    document.getElementById("verifyBtn").style.display = "none"
    document.getElementById("backBtn").style.display = "inline-block"

    showNotification("Passcode verified! Choose an update option.", "success")
  } else {
    showNotification("Incorrect passcode. Please try again.", "error")
    document.getElementById("passcodeInput").value = ""
  }
}

<<<<<<< HEAD
// Toggle Password Visibility
function togglePasswordVisibility() {
  const passcodeInput = document.getElementById("passcodeInput")
  const toggleBtn = document.getElementById("togglePasscode")
  const icon = toggleBtn.querySelector("i")

  if (passcodeInput.type === "password") {
    passcodeInput.type = "text"
    icon.className = "fas fa-eye-slash"
    toggleBtn.setAttribute("title", "Hide Password")
  } else {
    passcodeInput.type = "password"
    icon.className = "fas fa-eye"
    toggleBtn.setAttribute("title", "Show Password")
  }
}

=======
>>>>>>> bbbe7a5 (Updated project with latest changes)
// Show Upload Option
function showUploadOption() {
  document.getElementById("updateOptions").style.display = "none"
  document.getElementById("uploadSection").style.display = "block"
  document.getElementById("saveUpdateBtn").style.display = "inline-block"

  setupUpdateFileUpload()
}

// Show Edit Option
function showEditOption() {
  document.getElementById("updateOptions").style.display = "none"
  document.getElementById("editSection").style.display = "block"
  document.getElementById("saveUpdateBtn").style.display = "inline-block"

  // Load current resume content
  const currentContent = document.getElementById("resumeContent").innerHTML
  document.getElementById("resumeTextarea").value = currentContent
}

// Go Back to Options
function goBackToOptions() {
  document.getElementById("uploadSection").style.display = "none"
  document.getElementById("editSection").style.display = "none"
  document.getElementById("updateOptions").style.display = "block"
  document.getElementById("saveUpdateBtn").style.display = "none"

  // Clear upload section
  document.getElementById("updateFileInfo").style.display = "none"
  document.getElementById("updateResumeFile").value = ""
}

// Setup Update File Upload
let updateResumeFile = null

function setupUpdateFileUpload() {
  const uploadArea = document.getElementById("updateUploadArea")
  const fileInput = document.getElementById("updateResumeFile")

  if (!uploadArea || !fileInput) return

  // Drag and drop functionality
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("dragover")
  })

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover")
  })

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleUpdateFileSelect(files[0])
    }
  })

  // Click to upload
  uploadArea.addEventListener("click", () => {
    fileInput.click()
  })

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleUpdateFileSelect(e.target.files[0])
    }
  })
}

function handleUpdateFileSelect(file) {
  // Validate file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]

  if (!allowedTypes.includes(file.type)) {
    showNotification("Please upload a PDF or Word document.", "error")
    return
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showNotification("File size should be less than 5MB.", "error")
    return
  }

  updateResumeFile = file

  // Show file info
  document.getElementById("updateFileName").textContent = file.name
  document.getElementById("updateFileInfo").style.display = "block"

  showNotification("New file selected successfully!", "success")
}

// Save Updated Resume
function saveUpdatedResume() {
  const uploadSection = document.getElementById("uploadSection")
  const editSection = document.getElementById("editSection")

  if (uploadSection.style.display !== "none") {
    // Save uploaded file
    if (!updateResumeFile) {
      showNotification("Please select a file first.", "error")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      // Save file info to localStorage
      localStorage.setItem("resumeFileName", updateResumeFile.name)
      localStorage.setItem("resumeFileType", updateResumeFile.type)
      localStorage.setItem("resumeFileData", e.target.result)

      // Create resume content HTML
      const resumeContent = `
        <div class="text-center mb-4">
          <h3>Archana Anand</h3>
          <p class="text-muted">Full Stack Developer | MERN Stack Enthusiast</p>
          <p>Email: archana.anand@email.com | Phone: +91-XXXXXXXXXX</p>
        </div>
        
        <div class="resume-file-info mb-4">
          <div class="alert alert-info">
            <i class="fas fa-file-pdf"></i>
            <strong>Uploaded Resume:</strong> ${updateResumeFile.name}
            <br>
            <small>File Type: ${updateResumeFile.type}</small>
          </div>
        </div>
        
        <h5 class="text-success">Education</h5>
        <ul>
          <li>Master of Computer Applications (MCA) - Completed</li>
          <li>Bachelor of Computer Applications (BCA) - Completed</li>
          <li>Currently pursuing MERN Stack Development Course</li>
        </ul>
        
        <h5 class="text-success">Skills</h5>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
        
        <h5 class="text-success">Projects</h5>
        <ul>
          <li>Portfolio Website - Personal portfolio showcasing skills and projects</li>
          <li>MERN Stack Applications - Various projects during course completion</li>
        </ul>
      `

      localStorage.setItem("resumeContent", resumeContent)
      document.getElementById("resumeContent").innerHTML = resumeContent

      showNotification("Resume updated successfully!", "success")

      // Close modal
      const updateModal = window.bootstrap.Modal.getInstance(document.getElementById("updateResumeModal"))
      updateModal.hide()
    }
    reader.readAsDataURL(updateResumeFile)
  } else if (editSection.style.display !== "none") {
    // Save edited content
    const newContent = document.getElementById("resumeTextarea").value

    if (newContent.trim()) {
      // Update resume content
      document.getElementById("resumeContent").innerHTML = newContent
      localStorage.setItem("resumeContent", newContent)

      showNotification("Resume content updated successfully!", "success")

      // Close modal
      const updateModal = window.bootstrap.Modal.getInstance(document.getElementById("updateResumeModal"))
      updateModal.hide()
    } else {
      showNotification("Please enter resume content.", "error")
    }
  }
}

// Notification System
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  const notification = document.createElement("div")
  notification.className = `notification alert alert-${type === "error" ? "danger" : type} alert-dismissible fade show`
  notification.style.position = "fixed"
  notification.style.top = "20px"
  notification.style.right = "20px"
  notification.style.zIndex = "9999"
  notification.style.minWidth = "300px"

  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add typing animation to terminal
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    typingElement.style.opacity = "0"
    setTimeout(() => {
      typingElement.style.opacity = "1"
      typingElement.classList.add("fade-in")
    }, 500)
  }
})

<<<<<<< HEAD
// Enhanced Form submission handler with contact storage
=======
// Form submission handler
>>>>>>> bbbe7a5 (Updated project with latest changes)
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("#contact form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
<<<<<<< HEAD
=======
      const formData = new FormData(this)
>>>>>>> bbbe7a5 (Updated project with latest changes)
      const name = this.querySelector('input[placeholder="Your Name"]').value
      const email = this.querySelector('input[placeholder="Your Email"]').value
      const subject = this.querySelector('input[placeholder="Subject"]').value
      const message = this.querySelector("textarea").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all fields.", "error")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

<<<<<<< HEAD
      // Save contact data to localStorage
      saveContactData(name, email, subject, message)

=======
>>>>>>> bbbe7a5 (Updated project with latest changes)
      // Simulate form submission
      showNotification("Message sent successfully! I'll get back to you soon.", "success")
      this.reset()
    })
  }
})

<<<<<<< HEAD
// Save Contact Data Function
function saveContactData(name, email, subject, message) {
  const timestamp = new Date().toLocaleString()
  const contactEntry = {
    timestamp: timestamp,
    name: name,
    email: email,
    subject: subject,
    message: message,
  }

  // Get existing contacts or initialize empty array
  const contacts = JSON.parse(localStorage.getItem("contactSubmissions")) || []

  // Add new contact
  contacts.push(contactEntry)

  // Save back to localStorage
  localStorage.setItem("contactSubmissions", JSON.stringify(contacts))

  console.log("Contact saved:", contactEntry)
}

// Download Contacts Function
function downloadContacts() {
  const contacts = JSON.parse(localStorage.getItem("contactSubmissions")) || []

  if (contacts.length === 0) {
    showNotification("No contact submissions found.", "info")
    return
  }

  // Create contact.txt content
  let contactContent = "=== CONTACT FORM SUBMISSIONS ===\n\n"

  contacts.forEach((contact, index) => {
    contactContent += `--- Contact ${index + 1} ---\n`
    contactContent += `Timestamp: ${contact.timestamp}\n`
    contactContent += `Name: ${contact.name}\n`
    contactContent += `Email: ${contact.email}\n`
    contactContent += `Subject: ${contact.subject}\n`
    contactContent += `Message: ${contact.message}\n`
    contactContent += `\n${"=".repeat(50)}\n\n`
  })

  // Create and download file
  const blob = new Blob([contactContent], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "contact.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)

  showNotification(`Downloaded ${contacts.length} contact submissions!`, "success")
}

=======
>>>>>>> bbbe7a5 (Updated project with latest changes)
// Add loading animation to buttons when clicked
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn") && !e.target.classList.contains("btn-close")) {
    const originalText = e.target.innerHTML
    e.target.innerHTML = '<span class="loading"></span> Loading...'
    e.target.disabled = true

    setTimeout(() => {
      e.target.innerHTML = originalText
      e.target.disabled = false
    }, 1000)
  }
})

// Resume Upload Functionality
let uploadedResumeFile = null

function uploadResume() {
  const uploadModal = new window.bootstrap.Modal(document.getElementById("uploadResumeModal"))
  uploadModal.show()
}

// Check if resume exists on page load
document.addEventListener("DOMContentLoaded", () => {
  setupFileUpload()
})

function setupFileUpload() {
  const uploadArea = document.getElementById("uploadArea")
  const fileInput = document.getElementById("resumeFile")

  if (!uploadArea || !fileInput) return

  // Drag and drop functionality
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("dragover")
  })

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover")
  })

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  })

  // Click to upload
  uploadArea.addEventListener("click", () => {
    fileInput.click()
  })

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0])
    }
  })
}

function handleFileSelect(file) {
  // Validate file type
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ]

  if (!allowedTypes.includes(file.type)) {
    showNotification("Please upload a PDF or Word document.", "error")
    return
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showNotification("File size should be less than 5MB.", "error")
    return
  }

  uploadedResumeFile = file

  // Show file info
  document.getElementById("fileName").textContent = file.name
  document.getElementById("fileInfo").style.display = "block"
  document.getElementById("saveResumeBtn").style.display = "inline-block"

  showNotification("File selected successfully!", "success")
}

function saveUploadedResume() {
  if (!uploadedResumeFile) {
    showNotification("Please select a file first.", "error")
    return
  }

  const reader = new FileReader()

  reader.onload = (e) => {
    // Save file info to localStorage
    localStorage.setItem("resumeFileName", uploadedResumeFile.name)
    localStorage.setItem("resumeFileType", uploadedResumeFile.type)
    localStorage.setItem("resumeFileData", e.target.result)

    // Create resume content HTML for modal view
    const resumeContent = `
      <div class="text-center mb-4">
        <h3>Archana Anand</h3>
        <p class="text-muted">Full Stack Developer | MERN Stack Enthusiast</p>
        <p>Email: archana.anand@email.com | Phone: +91-XXXXXXXXXX</p>
      </div>
      
      <div class="resume-file-info mb-4">
        <div class="alert alert-info">
          <i class="fas fa-file-pdf"></i>
          <strong>Uploaded Resume:</strong> ${uploadedResumeFile.name}
          <br>
          <small>File Type: ${uploadedResumeFile.type}</small>
        </div>
      </div>
      
      <h5 class="text-success">Education</h5>
      <ul>
        <li>Master of Computer Applications (MCA) - Completed</li>
        <li>Bachelor of Computer Applications (BCA) - Completed</li>
        <li>Currently pursuing MERN Stack Development Course</li>
      </ul>
      
      <h5 class="text-success">Skills</h5>
      <ul>
        <li>Frontend: HTML, CSS, JavaScript, React.js, Bootstrap</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB</li>
        <li>Version Control: Git, GitHub</li>
      </ul>
      
      <h5 class="text-success">Projects</h5>
      <ul>
        <li>Portfolio Website - Personal portfolio showcasing skills and projects</li>
        <li>MERN Stack Applications - Various projects during course completion</li>
      </ul>
    `

    localStorage.setItem("resumeContent", resumeContent)

    // Close upload modal
    const uploadModal = window.bootstrap.Modal.getInstance(document.getElementById("uploadResumeModal"))
    uploadModal.hide()

    showNotification("Resume uploaded and saved successfully!", "success")
  }

  reader.readAsDataURL(uploadedResumeFile)
}

// Enhanced animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in")
      }, index * 100)
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".skill-card, .project-card, .mini-project-card, .code-section, .about-card, .service-card, .testimonial-card, .timeline-item",
  )
  elementsToAnimate.forEach((element) => {
    observer.observe(element)
  })
})

// Enhanced typing animation
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing-text")
  if (typingElement) {
    const text = typingElement.innerHTML
    typingElement.innerHTML = ""
    typingElement.style.opacity = "1"

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      }
    }

    setTimeout(typeWriter, 1000)
  }
})

// Smooth reveal animations for stats
document.addEventListener("DOMContentLoaded", () => {
  const statItems = document.querySelectorAll(".stat-item")

  const animateStats = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector("h4")
        const finalNumber = Number.parseInt(statNumber.textContent)
        let currentNumber = 0

        const increment = finalNumber / 30
        const timer = setInterval(() => {
          currentNumber += increment
          if (currentNumber >= finalNumber) {
            currentNumber = finalNumber
            clearInterval(timer)
          }
          statNumber.textContent = Math.floor(currentNumber) + "+"
        }, 50)
      }
    })
  }

  const statsObserver = new IntersectionObserver(animateStats, {
    threshold: 0.5,
  })

  statItems.forEach((item) => {
    statsObserver.observe(item)
  })
})
