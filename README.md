# Portfolio Website

A modern, responsive portfolio website for job applications. Built with HTML, CSS, and JavaScript.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🚀 Fast loading and optimized
- ♿ Accessible and SEO-friendly
- 📧 Contact form ready for integration

## Sections

1. **Hero Section** - Introduction and call-to-action
2. **About** - Personal information and statistics
3. **Projects** - Showcase of featured projects
4. **Skills** - Technical skills and technologies
5. **Contact** - Contact information and form

## Customization

### Personal Information

1. **Name and Title**
   - Update `Your Name` in the HTML (multiple places)
   - Change the hero subtitle to match your role

2. **About Section**
   - Edit the about text in `index.html`
   - Update statistics in the `about-stats` section

3. **Projects**
   - Replace project cards with your actual projects
   - Update project titles, descriptions, and tech stacks
   - Add links to live demos and GitHub repositories

4. **Skills**
   - Modify skill categories and items to match your expertise

5. **Contact Information**
   - Update email, LinkedIn, and GitHub links
   - Configure contact form backend (see below)

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4f46e5;    /* Main brand color */
    --primary-dark: #4338ca;     /* Darker shade */
    --secondary-color: #6366f1;   /* Secondary color */
    /* ... more variables */
}
```

### Images

Replace placeholder images:
- Add a profile photo to replace the SVG placeholder
- Add project screenshots/images

## Contact Form Setup

The contact form currently shows an alert. To make it functional, you can:

1. **Use a service like Formspree:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Use EmailJS:**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Add their script and configure

3. **Backend API:**
   - Create your own backend endpoint
   - Update the form submission handler in `script.js`

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and folder
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository

### Vercel

1. Import your GitHub repository
2. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your portfolio!

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Icons: Emoji (can be replaced with icon libraries like Font Awesome)

---

**Good luck with your job applications! 🚀**

