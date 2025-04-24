# Modern Landing Page with Scroll Animations and Responsive Navigation

A Next.js-based landing page application featuring smooth scroll animations, responsive navigation, and social media integration. Built with modern web technologies, this project delivers an engaging user experience with seamless transitions and mobile-friendly design.

The application implements ScrollReveal for elegant scroll-based animations and includes a fully responsive navigation system that adapts to different screen sizes. It features a clean, minimalist design with sections for About, Services, Contact, and additional content. The project utilizes Tailwind CSS for styling, ensuring consistent and maintainable design patterns across the application.

Key features include:
- Smooth scroll animations with ScrollReveal integration
- Responsive navigation with mobile menu support
- Social media integration (Instagram, LinkedIn, WhatsApp)
- Google Fonts integration (Geist and Geist Mono)
- Fixed WhatsApp button for easy contact access
- Modern development setup with ESLint and TypeScript support

## Repository Structure
```
.
├── app/                          # Main application directory containing React components
│   ├── button.js                 # WhatsApp button component
│   ├── globals.css              # Global styles and Tailwind CSS imports
│   ├── layout.js                # Root layout with ScrollReveal setup
│   ├── Navbar.js                # Navigation component with responsive design
│   ├── NavbarElements.js        # Navigation elements and links
│   ├── page.js                  # Main page component with sections
│   └── useScrollReveal.js       # Custom hook for scroll animations
├── configuration/                # Project configuration files
│   ├── eslint.config.mjs        # ESLint configuration
│   ├── next.config.mjs          # Next.js configuration
│   ├── postcss.config.mjs       # PostCSS configuration for Tailwind
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── tsconfig.json           # TypeScript configuration
└── package.json                 # Project dependencies and scripts
```

## Usage Instructions
### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- Basic knowledge of React and Next.js

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-directory>

# Install dependencies
npm install
# or
yarn install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:3000`

### More Detailed Examples
#### Customizing Scroll Animations
```javascript
// In useScrollReveal.js
ScrollReveal().reveal('.reveal', {
  distance: '50px',
  duration: 1000,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 600
});
```

#### Adding New Navigation Items
```javascript
// In NavbarElements.js
export const NavbarElements = () => {
  return (
    <>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="services" smooth={true} duration={500}>Services</Link>
      // Add more navigation items here
    </>
  );
};
```

### Troubleshooting
#### Common Issues
1. Scroll animations not working
   - Ensure elements have the 'reveal' class
   - Check browser console for ScrollReveal errors
   - Verify ScrollReveal initialization in layout.js

2. Navigation menu not responsive
   - Check viewport meta tag in layout.js
   - Verify Tailwind CSS classes in Navbar component
   - Ensure JavaScript is enabled in the browser

#### Debug Mode
Enable debug logging:
```javascript
// In layout.js
ScrollReveal({ debug: true });
```

## Data Flow
The application follows a component-based architecture with unidirectional data flow. User interactions trigger state updates which propagate through the component tree.

```ascii
User Input → Navigation Component → Page State
     ↓              ↓                  ↓
Scroll Events → ScrollReveal → DOM Updates
     ↓              ↓                  ↓
Component State → Layout Updates → Visual Feedback
```

Key component interactions:
1. Navigation triggers smooth scrolling to target sections
2. ScrollReveal observes viewport changes and animates elements
3. WhatsApp button visibility controlled by scroll position
4. Mobile menu state managed by Navbar component
5. Social media links handled by footer component