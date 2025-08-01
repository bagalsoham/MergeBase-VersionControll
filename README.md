# 🚀 MergeBase - Next-Gen Version Control System

<div align="center">

![MergeBase Logo](https://via.placeholder.com/200x80/4a90e2/ffffff?text=MergeBase)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/yourusername/mergebase)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/mergebase)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

**A powerful, modern version control system built for developers, by developers**

[🌟 Live Demo](https://your-demo-url.com) • [📖 Documentation](https://docs.mergebase.com) • [🐛 Report Bug](https://github.com/yourusername/mergebase/issues) • [💡 Request Feature](https://github.com/yourusername/mergebase/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔧 Core Features
- **Distributed Version Control** - Full Git compatibility
- **Branch Management** - Advanced branching strategies
- **Merge Conflict Resolution** - Smart conflict detection
- **Repository Analytics** - Detailed insights & metrics
- **Multi-user Collaboration** - Real-time team features

</td>
<td width="50%">

### 🎯 Advanced Features
- **CLI Integration** - Powerful command-line tools
- **REST API** - Complete programmatic access
- **Cloud Storage** - Scalable AWS infrastructure
- **Security First** - Enterprise-grade authentication
- **Testing Suite** - Comprehensive test coverage

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

### Backend & Infrastructure
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Frontend & UI
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### Tools & Testing
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![Yargs](https://img.shields.io/badge/Yargs-000000?style=for-the-badge&logo=npm&logoColor=white)

</div>

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git installed
- AWS account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mergebase.git
cd mergebase

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development servers
npm run dev
```

### Environment Setup

```bash
# Backend Environment Variables
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_S3_BUCKET=your_s3_bucket_name
```

---

## 📱 Screenshots

<div align="center">

### Dashboard Overview
![Dashboard](https://via.placeholder.com/800x400/f8f9fa/343a40?text=MergeBase+Dashboard)

### Repository Management
![Repository](https://via.placeholder.com/800x400/e9ecef/495057?text=Repository+Management)

### Merge Conflicts Resolution
![Conflicts](https://via.placeholder.com/800x400/dee2e6/6c757d?text=Conflict+Resolution)

</div>

---

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Client  │    │  Express API    │    │  MongoDB Atlas  │
│   (Bootstrap)   │◄──►│   (Node.js)     │◄──►│   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AWS Amplify   │    │   AWS EC2       │    │   AWS S3        │
│  (Frontend)     │    │  (Backend)      │    │ (File Storage)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

---

## 🎨 Frontend Components

### Authentication System
```
📁 src/components/auth/
├── 🔐 LoginForm.jsx           # User login interface
├── 📝 RegisterForm.jsx        # User registration
├── 🔄 ForgotPassword.jsx      # Password recovery
├── 🛡️ ProtectedRoute.jsx      # Route protection
└── 👤 UserProfile.jsx         # Profile management
```

### Dashboard Components
```
📁 src/components/dashboard/
├── 📊 MainDashboard.jsx       # Primary dashboard view
├── 📈 ActivityFeed.jsx        # Recent activities
├── 📋 ProjectOverview.jsx     # Project statistics
├── 👥 TeamMembers.jsx         # Team collaboration
└── 🔔 NotificationCenter.jsx  # Alerts & notifications
```

### Repository Management
```
📁 src/components/repository/
├── 🏗️ CreateRepository.jsx    # New repository creation
├── 🔍 SearchRepository.jsx    # Repository search
├── 📚 RepositoryList.jsx      # Repository listing
├── 📖 RepositoryDetails.jsx   # Detailed repo view
├── 🌿 BranchManager.jsx       # Branch operations
├── 📝 CommitHistory.jsx       # Commit timeline
├── 🔀 MergeInterface.jsx      # Merge operations
└── ⚙️ RepositorySettings.jsx  # Repository configuration
```

### Issues Management
```
📁 src/components/issues/
├── 🐛 CreateIssue.jsx         # New issue creation
├── 📋 IssuesList.jsx          # Issues listing
├── 📖 IssueDetails.jsx        # Issue detailed view
├── 🏷️ IssueLabels.jsx         # Label management
├── 👤 AssigneeSelector.jsx    # User assignment
├── 💬 CommentSection.jsx      # Issue discussions
└── 📊 IssueFilters.jsx        # Filtering & sorting
```

---

## 🗄️ Database Schemas

### User Schema
```javascript
const UserSchema = {
  _id: ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String,
    location: String,
    website: String
  },
  preferences: {
    theme: { type: String, default: 'light' },
    emailNotifications: { type: Boolean, default: true },
    language: { type: String, default: 'en' }
  },
  repositories: [{ type: ObjectId, ref: 'Repository' }],
  collaborations: [{
    repository: { type: ObjectId, ref: 'Repository' },
    role: { type: String, enum: ['admin', 'write', 'read'] },
    joinedAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLoginAt: Date,
  isActive: { type: Boolean, default: true },
  emailVerified: { type: Boolean, default: false },
  resetPasswordToken: String,
  resetPasswordExpires: Date
}
```

### Repository Schema
```javascript
const RepositorySchema = {
  _id: ObjectId,
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100
  },
  description: {
    type: String,
    maxlength: 500
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  visibility: {
    type: String,
    enum: ['public', 'private'],
    default: 'public'
  },
  collaborators: [{
    user: { type: ObjectId, ref: 'User' },
    role: { type: String, enum: ['admin', 'write', 'read'] },
    addedAt: { type: Date, default: Date.now }
  }],
  branches: [{
    name: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
    lastCommit: {
      hash: String,
      message: String,
      author: { type: ObjectId, ref: 'User' },
      timestamp: Date
    },
    protected: { type: Boolean, default: false }
  }],
  commits: [{
    hash: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    author: { type: ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now },
    branch: String,
    parentCommits: [String],
    filesChanged: [{
      path: String,
      action: { type: String, enum: ['added', 'modified', 'deleted'] },
      linesAdded: Number,
      linesDeleted: Number
    }]
  }],
  tags: [{
    name: String,
    commit: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
  }],
  settings: {
    defaultBranch: { type: String, default: 'main' },
    allowMergeCommits: { type: Boolean, default: true },
    allowSquashMerge: { type: Boolean, default: true },
    allowRebaseMerge: { type: Boolean, default: true },
    deleteBranchOnMerge: { type: Boolean, default: false }
  },
  statistics: {
    totalCommits: { type: Number, default: 0 },
    totalBranches: { type: Number, default: 1 },
    totalTags: { type: Number, default: 0 },
    totalIssues: { type: Number, default: 0 },
    lastActivity: Date
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isArchived: { type: Boolean, default: false },
  language: String,
  topics: [String],
  homepage: String,
  size: { type: Number, default: 0 } // in bytes
}
```

### Issue Schema
```javascript
const IssueSchema = {
  _id: ObjectId,
  number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200
  },
  body: {
    type: String,
    maxlength: 10000
  },
  repository: {
    type: ObjectId,
    ref: 'Repository',
    required: true
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  assignees: [{
    user: { type: ObjectId, ref: 'User' },
    assignedAt: { type: Date, default: Date.now }
  }],
  labels: [{
    name: String,
    color: String,
    description: String
  }],
  milestone: {
    title: String,
    description: String,
    dueDate: Date,
    state: { type: String, enum: ['open', 'closed'] }
  },
  state: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  comments: [{
    _id: ObjectId,
    author: { type: ObjectId, ref: 'User' },
    body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    reactions: [{
      emoji: String,
      users: [{ type: ObjectId, ref: 'User' }]
    }]
  }],
  events: [{
    type: { 
      type: String, 
      enum: ['opened', 'closed', 'reopened', 'assigned', 'unassigned', 'labeled', 'unlabeled', 'commented']
    },
    actor: { type: ObjectId, ref: 'User' },
    timestamp: { type: Date, default: Date.now },
    data: Schema.Types.Mixed // Additional event-specific data
  }],
  linkedPullRequests: [{
    type: ObjectId,
    ref: 'PullRequest'
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  closedAt: Date,
  closedBy: { type: ObjectId, ref: 'User' },
  locked: { type: Boolean, default: false },
  lockReason: String
}
```

---

## 🎯 API Endpoints

### User Router (`/api/users`)
```http
# Authentication
POST   /api/users/register           # User registration
POST   /api/users/login              # User login
POST   /api/users/logout             # User logout
POST   /api/users/refresh-token      # Refresh JWT token
POST   /api/users/forgot-password    # Request password reset
POST   /api/users/reset-password     # Reset password with token

# Profile Management
GET    /api/users/profile            # Get current user profile
PUT    /api/users/profile            # Update user profile
DELETE /api/users/profile            # Delete user account
POST   /api/users/avatar             # Upload profile avatar
GET    /api/users/:username          # Get public user profile

# Account Settings
PUT    /api/users/password           # Change password
PUT    /api/users/email              # Change email
PUT    /api/users/preferences        # Update user preferences
GET    /api/users/notifications      # Get notifications
PUT    /api/users/notifications/:id  # Mark notification as read

# User Discovery
GET    /api/users                    # Search users (public)
GET    /api/users/:username/repos    # Get user's public repositories
GET    /api/users/:username/activity # Get user's activity feed
```

### Repository Router (`/api/repos`)
```http
# Repository CRUD
GET    /api/repos                    # List user's repositories
POST   /api/repos                    # Create new repository
GET    /api/repos/:owner/:name       # Get repository details
PUT    /api/repos/:owner/:name       # Update repository
DELETE /api/repos/:owner/:name       # Delete repository
POST   /api/repos/:owner/:name/fork  # Fork repository

# Repository Content
GET    /api/repos/:owner/:name/contents/:path    # Get file/directory contents
PUT    /api/repos/:owner/:name/contents/:path    # Create/update file
DELETE /api/repos/:owner/:name/contents/:path    # Delete file

# Branch Management
GET    /api/repos/:owner/:name/branches          # List branches
POST   /api/repos/:owner/:name/branches          # Create branch
GET    /api/repos/:owner/:name/branches/:branch  # Get branch details
DELETE /api/repos/:owner/:name/branches/:branch  # Delete branch
PUT    /api/repos/:owner/:name/branches/:branch/protection # Update branch protection

# Commit Operations
GET    /api/repos/:owner/:name/commits           # Get commit history
GET    /api/repos/:owner/:name/commits/:sha      # Get specific commit
POST   /api/repos/:owner/:name/commits           # Create commit
POST   /api/repos/:owner/:name/merges            # Create merge

# Collaboration
GET    /api/repos/:owner/:name/collaborators     # List collaborators
PUT    /api/repos/:owner/:name/collaborators/:username  # Add collaborator
DELETE /api/repos/:owner/:name/collaborators/:username # Remove collaborator
GET    /api/repos/:owner/:name/invitations       # List pending invitations

# Repository Analytics
GET    /api/repos/:owner/:name/stats             # Repository statistics
GET    /api/repos/:owner/:name/activity          # Activity feed
GET    /api/repos/:owner/:name/traffic           # Traffic analytics
GET    /api/repos/:owner/:name/languages         # Language breakdown
```

### Issue Router (`/api/repos/:owner/:name/issues`)
```http
# Issue CRUD
GET    /api/repos/:owner/:name/issues            # List repository issues
POST   /api/repos/:owner/:name/issues            # Create new issue
GET    /api/repos/:owner/:name/issues/:number    # Get specific issue
PUT    /api/repos/:owner/:name/issues/:number    # Update issue
DELETE /api/repos/:owner/:name/issues/:number    # Delete issue (admin only)

# Issue State Management
PUT    /api/repos/:owner/:name/issues/:number/state       # Open/Close issue
PUT    /api/repos/:owner/:name/issues/:number/lock        # Lock/Unlock issue

# Issue Assignment
GET    /api/repos/:owner/:name/issues/:number/assignees   # Get assignees
POST   /api/repos/:owner/:name/issues/:number/assignees   # Add assignees
DELETE /api/repos/:owner/:name/issues/:number/assignees   # Remove assignees

# Labels Management
GET    /api/repos/:owner/:name/labels                     # List repository labels
POST   /api/repos/:owner/:name/labels                     # Create label
PUT    /api/repos/:owner/:name/labels/:name               # Update label
DELETE /api/repos/:owner/:name/labels/:name               # Delete label
POST   /api/repos/:owner/:name/issues/:number/labels      # Add labels to issue
DELETE /api/repos/:owner/:name/issues/:number/labels/:name # Remove label from issue

# Comments System
GET    /api/repos/:owner/:name/issues/:number/comments    # Get issue comments
POST   /api/repos/:owner/:name/issues/:number/comments    # Add comment
PUT    /api/repos/:owner/:name/issues/comments/:id        # Update comment
DELETE /api/repos/:owner/:name/issues/comments/:id        # Delete comment

# Issue Events & Timeline
GET    /api/repos/:owner/:name/issues/:number/events      # Get issue events
GET    /api/repos/:owner/:name/issues/:number/timeline    # Get full timeline

# Milestones
GET    /api/repos/:owner/:name/milestones                 # List milestones
POST   /api/repos/:owner/:name/milestones                 # Create milestone
PUT    /api/repos/:owner/:name/milestones/:number         # Update milestone
DELETE /api/repos/:owner/:name/milestones/:number         # Delete milestone

# Issue Search & Filtering
GET    /api/repos/:owner/:name/issues/search              # Search issues
GET    /api/repos/:owner/:name/issues/filters             # Get available filters
```

---

## 🖥️ CLI Usage

MergeBase comes with a powerful CLI built with Yargs, replicating Git functionality:

### Core Version Control Commands

```bash
# Initialize a new repository
mergebase init
mergebase init --bare  # Initialize bare repository

# Add files to staging area
mergebase add file.txt
mergebase add .        # Add all files
mergebase add *.js     # Add all JavaScript files

# Commit changes
mergebase commit -m "Initial commit"
mergebase commit -m "Add new feature" --author "John Doe"
mergebase commit --amend  # Amend last commit

# Push to remote repository
mergebase push
mergebase push origin main
mergebase push -u origin feature-branch  # Set upstream

# Pull from remote repository
mergebase pull
mergebase pull origin main
mergebase pull --rebase  # Pull with rebase

# Revert changes
mergebase revert HEAD
mergebase revert <commit-hash>
mergebase revert HEAD~3  # Revert last 3 commits
```

### Additional Commands

```bash
# Repository status
mergebase status
mergebase status --short

# Branch management
mergebase branch <branch-name>
mergebase checkout <branch-name>
mergebase merge <branch-name>

# View commit history
mergebase log
mergebase log --oneline
mergebase log --graph

# Remote management
mergebase remote add origin <url>
mergebase remote -v

# Diff operations
mergebase diff
mergebase diff --staged
```

---

## 🧪 Testing

We use Jest for comprehensive testing coverage:

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test suite
npm test -- auth.test.js

# Run tests in watch mode
npm run test:watch
```

### Test Coverage
- **Unit Tests**: 95% coverage
- **Integration Tests**: 90% coverage
- **E2E Tests**: 85% coverage

---

## 🚀 Deployment

### AWS Deployment Steps

1. **Frontend (AWS Amplify)**
   ```bash
   cd client
   npm run build
   # Deploy to Amplify Console
   ```

2. **Backend (AWS EC2)**
   ```bash
   # SSH to EC2 instance
   ssh -i your-key.pem ec2-user@your-ec2-ip
   
   # Clone and setup
   git clone https://github.com/yourusername/mergebase.git
   cd mergebase
   npm install
   npm start
   ```

3. **File Storage (AWS S3)**
   - Configure S3 bucket for repository files
   - Set up proper IAM permissions
   - Update environment variables

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Workflow

```bash
# Setup development environment
npm run setup

# Start development servers
npm run dev

# Run linting
npm run lint

# Format code
npm run format

# Run tests before commit
npm test
```

---

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/mergebase?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/mergebase?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/mergebase)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/mergebase)

</div>

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Team

<div align="center">

| Role | Name | GitHub |
|------|------|--------|
| **Lead Developer** | Your Name | [@yourusername](https://github.com/yourusername) |
| **Backend Engineer** | Team Member | [@teammember](https://github.com/teammember) |
| **Frontend Engineer** | Team Member | [@teammember2](https://github.com/teammember2) |

</div>

---

## 📞 Support

Need help? We're here for you!

- 📧 **Email**: support@mergebase.com
- 💬 **Discord**: [Join our community](https://discord.gg/mergebase)
- 📖 **Documentation**: [docs.mergebase.com](https://docs.mergebase.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/mergebase/issues)

---

<div align="center">

**Made with ❤️ by the MergeBase Team**

⭐ Star us on GitHub if this project helped you!

</div>