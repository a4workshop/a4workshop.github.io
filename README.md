# A4 Workshop Website

A lightweight, responsive static website for A4 Workshop.

## Pages

- `index.html` — entry page linking to the two current content sections
- `speakers.html` — invited-speaker card layout
- `program.html` — detailed-program timeline layout

## Local preview

From the project directory, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C`.

## Content updates

All unconfirmed workshop information is deliberately marked with square-bracket placeholders, such as `[Speaker Name]`, `[Date Placeholder]`, and `[Session Title]`. Replace them only when the corresponding information is confirmed.

## Future pages

The shared header, navigation, and CSS are structured to support additional pages, including an Accommodation page, without a framework.
