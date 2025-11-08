# Patient Emergency Priority System

A web-based system for managing emergency patient priorities in a healthcare setting.

## Features

- Add new patients with details (name, age, condition)
- Automatic priority calculation based on age and condition
- Real-time patient list with priority ordering
- Responsive web interface

## Project Structure

```
patient-emergency-priority-system/
│
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── routes.py
│   │   ├── utils.py
│   │   └── config.py
│   │
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── gunicorn.conf.py
│   └── run.py
│
├── frontend/
│   ├── index.html
│   ├── add_patient.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── (images, icons, etc.)
```

## Setup

### Backend

1. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```bash
   python run.py
   ```

### Frontend

1. Open the frontend folder in a web browser or use a local server.
2. Make sure the backend API URL in `script.js` matches your backend server address.

## Usage

1. Open the main page (index.html)
2. Click "Add New Patient" to register a new patient
3. Fill in the patient details and submit
4. View the prioritized list of patients on the main page

## Docker Deployment

Build and run the backend using Docker:

```bash
cd backend
docker build -t patient-priority-system .
docker run -p 5000:5000 patient-priority-system
```