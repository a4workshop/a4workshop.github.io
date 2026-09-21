# Website Release Procedure

## gogit

When the user says `gogit`, deploy the current website safely.

1. Check the current branch, git status, staged changes, git diff summary, and origin URL.
2. Deploy only website source changes.
3. Never include the following in a commit or push:
   - `reference/`
   - `output/`
   - generated invitation PDFs or DOCX files
   - local preview, rendering, or temporary files
   - `.env`, credentials, secrets, or unrelated changes
4. Ensure excluded paths are covered by `.gitignore` when appropriate, without removing existing ignore rules.
5. Check the website’s basic HTML structure and internal links.
6. Create a concise English commit message that accurately describes the website changes being deployed.
7. Commit the approved website source changes.
8. Confirm that the current branch is `main` and that `origin` is exactly:

   https://github.com/a4workshop/a4workshop.github.io.git

9. Push `main` to `origin`.
10. Verify the GitHub Pages deployment at:

    https://a4workshop.github.io

11. Report the commit hash, commit message, deployment URL, excluded files or folders, and any unresolved issues in Korean.

Safety rules:

- Never use force push, reset --hard, or destructive Git commands.
- Do not include unrelated changes automatically.
- If the remote URL, current branch, or deployment target is unexpected, stop and report the issue instead of pushing.
