# Patient Emergency Priority System - Frontend

A modern, responsive web interface for managing patient emergencies and priorities in a healthcare setting.

## Features

- **Real-time Dashboard**
  - Total patients counter
  - High-priority patients tracker
  - Priority-based patient listing
  
- **Patient Management**
  - Add new patients with priority levels
  - Automatic priority-based sorting
  - Real-time updates
  
- **Responsive Design**
  - Works on desktop and mobile devices
  - Clean, modern interface
  - Intuitive navigation

## Tech Stack

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome 6.0.0 for icons

## File Structure

```
frontend/
│
├── index.html          # Main dashboard page
├── add_patient.html    # Patient registration form
├── style.css          # Global styles and theme
├── script.js          # Application logic and API integration
└── assets/           # Static assets (images, icons)
```

## Setup

1. **Local Development**
   ```bash
   # Using Python's built-in HTTP server
   python -m http.server 8080
   ```
   Or any other local development server of your choice.

2. **API Configuration**
   - Open `script.js`
   - Update the `API_URL` constant to point to your backend server:
     ```javascript
     const API_URL = 'http://your-backend-url';
     ```

## Pages

### Dashboard (index.html)
- View all patients in a priority-sorted list
- Real-time statistics
- Quick access to add new patients
- Manual refresh option

### Add Patient (add_patient.html)
- Patient registration form
- Input validation
- Priority level selection (1-5)
- Quick return to dashboard

## Styling

The interface uses a modern color scheme defined in CSS variables:
- Primary Color: #2c3e50
- Secondary Color: #3498db
- Accent Color: #e74c3c
- Background: #ecf0f1

## Features

### Priority Levels
- Level 5: Immediate attention required (Red)
- Level 4: Very urgent (Orange)
- Level 3: Urgent (Yellow)
- Level 2: Standard (Blue)
- Level 1: Non-urgent (Green)

### Responsive Components
- Fluid grid layout
- Mobile-friendly tables
- Adaptive button sizing
- Flexible stat cards

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

To modify the frontend:

1. **Styles**
   - Global styles are in `style.css`
   - CSS variables for easy theme customization
   - Responsive breakpoints included

2. **JavaScript**
   - API integration in `script.js`
   - Modular functions for maintainability
   - Error handling included

3. **HTML**
   - Semantic markup
   - ARIA attributes for accessibility
   - Font Awesome icons integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is part of the Patient Emergency Priority System.
Copyright © 2025. All rights reserved.