# RDM Exim

**RDM Exim** is an export company website for clothes, rice and spices. Overseas buyers can browse product lines, download catalogues and send a quote request directly from the site. The owner manages orders and catalogues from a private admin page.

**Live site:** https://hrjobrecuritment999-oss.github.io/Paras-nath-sharma/

## Contact

- Email: ranveervatsya837@gmail.com
- Phone: +91 82104 59357
- Phone: +230 5487 1230

## What the site does

- Three product lines (Clothes, Rice, Spices), each with a **Get quote** button per item
- Quote request form that saves orders straight to the database (no copy and paste into email)
- Catalogue download buttons, one per product line plus a general catalogue
- Admin page to read orders, change their status and upload PDF catalogues
- Floating WhatsApp button (appears once a WhatsApp number is set in `config.js`)
- Works on phones, tablets and desktops

## Files in this repository

| File | What it is |
| --- | --- |
| `index.html` | The public website |
| `config.js` | All editable text, contact details and product lists |
| `logo.svg` / `logo.png` | The RDM Exim logo |
| `admin-1.html` | Private admin page (orders and catalogues) |
| `sitemap.xml` / `robots.txt` | Help Google find and read the site |

## How to edit the site

Almost everything you want to change is in **`config.js`**:

- name, tagline and introduction
- email, phone numbers, WhatsApp number and address
- product lines, items and packing details
- the "Why RDM", "About" and "How we work" text
- photos (upload a picture to this repository and write its file name, for example `image: "rice.jpg"`)

To change something: edit the text inside the quotes in `config.js`, keep the quotes and commas, then commit. The site updates in 1 to 2 minutes.

## Admin page

Open `admin-1.html` on the live site and log in with the admin email. From there you can:

1. See new orders and mark them as new, contacted or closed
2. Download orders as a spreadsheet (CSV)
3. Upload a catalogue PDF for each product line (maximum 20 MB per file)

The admin page is not linked from the public site and is hidden from search engines.

## How it is built

- Plain HTML, CSS and JavaScript, hosted on GitHub Pages
- Orders, catalogues and admin login run on [Supabase](https://supabase.com) (database, authentication and file storage)
- No build step: upload the files and the site is live

## Updating on GitHub (from a phone)

1. Open the repository and tap **Add file → Upload files**
2. Choose the changed file(s). The file name must stay exactly the same (`index.html`, not `index-1.html`)
3. Tap **Commit changes** and wait 1 to 2 minutes

## Notes

- Supabase's free plan pauses a project after about a week with no activity. If orders stop saving, open the Supabase dashboard and restore the project.
- Do not put secret keys in this repository. Only the public (publishable) Supabase key belongs in `config.js`.

© RDM Exim. All rights reserved.
