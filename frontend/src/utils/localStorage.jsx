const Employee = [
  {
    "id": 1,
    "email": "john.doe@example.com",
    "password": "password123",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Complete Project Report",
        "taskDescription": "Submit the project report to the manager",
        "taskDate": "2025-02-15",
        "category": "Work"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Meet Client",
        "taskDescription": "Meet the client to discuss project details",
        "taskDate": "2025-02-10",
        "category": "Work"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Fix Bug",
        "taskDescription": "Fix the bug in the code",
        "taskDate": "2025-02-12",
        "category": "Work"
      }
    ]
  },
  {
    "id": 2,
    "email": "jane.smith@example.com",
    "password": "password456",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create Presentation",
        "taskDescription": "Create a presentation for the meeting",
        "taskDate": "2025-02-16",
        "category": "Work"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Submit Report",
        "taskDescription": "Submit the report to the manager",
        "taskDate": "2025-02-11",
        "category": "Work"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Meet Team",
        "taskDescription": "Meet the team to discuss project details",
        "taskDate": "2025-02-14",
        "category": "Work"
      }
    ]
  },
  {
    "id": 3,
    "email": "bob.johnson@example.com",
    "password": "password789",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Fix Issue",
        "taskDescription": "Fix the issue in the code",
        "taskDate": "2025-02-13",
        "category": "Work"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Submit Proposal",
        "taskDescription": "Submit the proposal to the client",
        "taskDate": "2025-02-09",
        "category": "Work"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Meet Deadline",
        "taskDescription": "Meet the deadline for the project",
        "taskDate": "2025-02-18",
        "category": "Work"
      }
    ]
  },
  {
    "id": 4,
    "email": "alice.brown@example.com",
    "password": "password1011",
    "tasks": [
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Create Document",
        "taskDescription": "Create a document for the project",
        "taskDate": "2025-02-17",
        "category": "Work"
      },
      {
        "active": false,
        "completed": true,
        "newTask": false,
        "failed": false,
        "taskTitle": "Submit Invoice",
        "taskDescription": "Submit the invoice to the client",
        "taskDate": "2025-02-08",
        "category": "Work"
      },
      {
        "active": true,
        "completed": false,
        "newTask": true,
        "failed": false,
        "taskTitle": "Meet Client",
        "taskDescription": "Meet the client to discuss project details",
        "taskDate": "2025-02-19",
        "category": "Work"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "newt.davis@example.com",
    "password": "password1213"
  }
];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(Employee));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage=()=>{
    
    const data=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    console.log(admin,data);
    
}

export { Employee, admin };
