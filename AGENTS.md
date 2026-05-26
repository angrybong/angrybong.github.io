# Repository Guidelines

## Project Structure & Module Organization
This repository is a Jekyll site built around the `no-style-please` theme.

- `_posts/` contains dated blog posts named `YYYY-MM-DD-slug.md`.
- `_layouts/` and `_includes/` hold the page templates and reusable partials.
- `_data/menu.yml` defines the main navigation.
- `_sass/` and `assets/css/main.scss` control styling; `assets/js/mouse_coords.js` is the only custom script.
- `index.md`, `about.md`, and `archive.md` are top-level pages.
- `_config.yml` contains site metadata, theme settings, and plugin configuration.

## Build, Test, and Development Commands
Use Bundler for all local work:

- `bundle install` installs the Ruby dependencies from `Gemfile`.
- `bundle exec jekyll serve` starts a local preview at `http://localhost:4000` with live rebuilds.
- `bundle exec jekyll build` performs a production-style static build and is the best quick validation before committing.

## Coding Style & Naming Conventions
Keep edits minimal and consistent with the existing files.

- Use two-space indentation in YAML, Liquid, and SCSS.
- Prefer lowercase, hyphenated filenames for posts and pages, especially in `_posts/`.
- Keep front matter explicit and ordered consistently with nearby files.
- Use descriptive markdown headings and short paragraphs; avoid dense formatting unless the content needs it.

## Testing Guidelines
There is no automated test suite in this repository. Validate changes by running `bundle exec jekyll serve` and checking:

- the home page and menu
- affected post pages and archive pages
- mobile width and dark/light appearance if the change touches styling

If you add new content or layouts, verify the generated output from `bundle exec jekyll build` completes without warnings you introduced.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects such as `Update _config.yml` or `Delete ...`. Match that style: keep the subject brief and action-oriented.

Pull requests should include:

- a short description of what changed and why
- links to related issues or posts, if applicable
- screenshots for visual or layout changes
- notes about any manual validation steps

## Agent-Specific Notes
This repository is for writing a personal blog during study, but the target output is not junior-level learning notes or simple summaries. The intended standard is deep, well-researched technical writing with clear reasoning, concrete examples, and durable insights.

Do not require local Jekyll or Ruby setup for routine content and theme changes. Prefer making the edit directly, validating the diff by inspection, and finishing with `git commit` and `git push` when the user asks to ship the change.

Avoid changing generated content or unrelated posts unless the task requires it. When editing theme files, check the rendered site locally before finishing.
