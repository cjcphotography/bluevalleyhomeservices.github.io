# Blue Valley Home Improvement Website

A professional multi-page website for Blue Valley Home Improvement.

## Pages
- `index.html` — Homepage
- `services.html` — Services (Window, Gutter, Power Wash, Roof)
- `reviews.html` — Google Reviews
- `contact.html` — Free Quote form

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `bluevalley-website`)
2. Upload ALL files in this folder to the repository root
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/bluevalley-website`

## Setting Up the Contact Form

The contact form uses **Formspree** (free tier available):
1. Go to https://formspree.io and create a free account
2. Create a new form and copy your Form ID (looks like `mgorwdkp`)
3. In `contact.html`, find this line:
   ```
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID
5. Form submissions will be emailed to your account email

## Customization

- **Phone/Email**: Search for `778-986-1726` and `bluevalleyhomeimprovement@gmail.com` across all files and replace with your actual contact info
- **Colors**: All colors are CSS variables in `style.css` under `:root { ... }`
- **Logo**: `logo.svg` — can be replaced with a custom logo file

## Files
```
index.html       — Homepage
services.html    — Services page  
reviews.html     — Reviews page
contact.html     — Contact / Quote page
style.css        — All styles
main.js          — Navigation, animations, form
logo.svg         — Company logo
favicon.svg      — Browser tab icon
README.md        — This file
```
