const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 1001,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Complete Q3 financial report",
        "description": "Finalize and submit the quarterly financial report for review.",
        "date": "2025-09-10",
        "category": "Finance"
      },
      {
        "id": 1002,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Update client database",
        "description": "Ensure all client contact information is current and accurate.",
        "date": "2025-09-12",
        "category": "Data Management"
      },
      {
        "id": 1003,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Prepare for team meeting",
        "description": "Create a presentation on project progress for the upcoming team meeting.",
        "date": "2025-09-15",
        "category": "Meetings"
      }
    ],
    "taskCount": {
      "active": 1,
      "new": 1,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Diya",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 2001,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Write blog post on new feature",
        "description": "Draft a 500-word blog post introducing the new software feature.",
        "date": "2025-09-18",
        "category": "Marketing"
      },
      {
        "id": 2002,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Review code for sprint 2",
        "description": "Perform a thorough code review for all commits in the current sprint.",
        "date": "2025-09-16",
        "category": "Development"
      },
      {
        "id": 2003,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Onboard new hire, Sarah",
        "description": "Guide Sarah through the onboarding process and introduce her to the team.",
        "date": "2025-09-14",
        "category": "HR"
      },
      {
        "id": 2004,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Fix critical bug in mobile app",
        "description": "Resolve the bug causing the app to crash on Android devices.",
        "date": "2025-09-13",
        "category": "Development"
      }
    ],
    "taskCount": {
      "active": 2,
      "new": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 3001,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Organize company retreat",
        "description": "Book a venue, catering, and activities for the annual company retreat.",
        "date": "2025-08-30",
        "category": "Events"
      },
      {
        "id": 3002,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Conduct user interviews",
        "description": "Interview 5-7 users to gather feedback on the new product prototype.",
        "date": "2025-09-20",
        "category": "Research"
      },
      {
        "id": 3003,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Prepare budget for next quarter",
        "description": "Submit a detailed budget proposal to the finance department.",
        "date": "2025-09-05",
        "category": "Finance"
      },
      {
        "id": 3004,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Research new software tools",
        "description": "Identify and evaluate potential software tools to improve team efficiency.",
        "date": "2025-09-19",
        "category": "Research"
      },
      {
        "id": 3005,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Create social media content calendar",
        "description": "Develop a content calendar for the next month's social media posts.",
        "date": "2025-09-08",
        "category": "Marketing"
      },
      {
        "id": 3006,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Recruit new junior developer",
        "description": "Write job description, screen resumes, and conduct initial interviews.",
        "date": "2025-09-22",
        "category": "HR"
      }
    ],
    "taskCount": {
      "active": 3,
      "new": 2,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 4001,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Design new website mockups",
        "description": "Create high-fidelity mockups for the homepage and key landing pages.",
        "date": "2025-09-25",
        "category": "Design"
      },
      {
        "id": 4002,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Meet with potential vendor",
        "description": "Hold a meeting with a new vendor to discuss partnership opportunities.",
        "date": "2025-09-17",
        "category": "Vendor Management"
      },
      {
        "id": 4003,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Resolve customer ticket #875",
        "description": "Troubleshoot and resolve a complex customer issue.",
        "date": "2025-09-11",
        "category": "Customer Support"
      }
    ],
    "taskCount": {
      "active": 2,
      "new": 2,
      "completed": 0,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "id": 5001,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Prepare weekly status report",
        "description": "Compile project updates and metrics for the weekly report.",
        "date": "2025-09-19",
        "category": "Reporting"
      },
      {
        "id": 5002,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Plan quarterly goals",
        "description": "Outline departmental goals and key results for the next quarter.",
        "date": "2025-09-26",
        "category": "Strategy"
      },
      {
        "id": 5003,
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "title": "Schedule 1:1 meetings",
        "description": "Book individual meetings with each team member for the month.",
        "date": "2025-09-20",
        "category": "Meetings"
      },
      {
        "id": 5004,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Review team performance metrics",
        "description": "Analyze team performance data from the last quarter.",
        "date": "2025-09-01",
        "category": "HR"
      },
      {
        "id": 5005,
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "title": "Troubleshoot network issue",
        "description": "Investigate and resolve the intermittent network connectivity problem.",
        "date": "2025-09-09",
        "category": "IT Support"
      },
      {
        "id": 5006,
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "title": "Test new software build",
        "description": "Run a series of tests on the latest software build before release.",
        "date": "2025-09-18",
        "category": "Quality Assurance"
      },
      {
        "id": 5007,
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "title": "Write internal newsletter",
        "description": "Draft and finalize the content for the company's internal newsletter.",
        "date": "2025-09-07",
        "category": "Communications"
      }
    ],
    "taskCount": {
      "active": 4,
      "new": 2,
      "completed": 2,
      "failed": 1
    }
  }
];

const admin = [{
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}];




export const setLocalStorage = () => {
  localStorage.setItem('Employees', JSON.stringify(employees));
  localStorage.setItem('Admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employes = JSON.parse(localStorage.getItem('Employees'));
  const admin = JSON.parse(localStorage.getItem('Admin')); 
  return{employees,admin}
}; 




