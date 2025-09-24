# Dirtywave M8 Documentation

A mobile-first documentation site for the Dirtywave M8 tracker, built with React, TypeScript, and Tailwind CSS. Features comprehensive M8 interface documentation with images, responsive design, and dark mode support.

## Features

- 📱 **Mobile-First Design** - Optimized for smartphones and tablets
- 🌙 **Dark/Light Mode** - Automatic theme detection with manual toggle
- 📸 **Interface Screenshots** - Visual reference images for each M8 view
- 🎨 **Clean Typography** - Readable documentation with highlighted keyboard shortcuts
- 🚀 **Fast Loading** - Bundled markdown content with lazy-loaded images
- 📚 **Complete Coverage** - All 14 M8 interface views documented

## Quick Start

### Prerequisites
- [Bun](https://bun.sh) runtime (v1.2.15+)

### Installation

```bash
# Clone and install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Run production build
bun start
```

## Content Management

### Updating Documentation

1. **Edit markdown files** in `/src/data/` (numbered 01-14)
2. **Regenerate content bundle**:
   ```bash
   bun run generate-content
   ```
3. **Restart dev server** to see changes

### Adding New Images

1. **Add images** to `/src/images/` with naming pattern: `##_description.png`
2. **Update image imports** in `/src/images/index.ts`
3. **Map images to sections** in `/src/data/index.ts`

Example:
```typescript
// /src/images/index.ts
import newView from './15_new-view.png';

export const images: Record<string, string> = {
  // ... existing images
  '15_new-view.png': newView,
};

// /src/data/index.ts
export const docSections: DocSection[] = [
  // ... existing sections
  {
    id: 'new-view',
    title: 'New View',
    shortTitle: 'New',
    filename: '15_New-View.md',
    image: '15_new-view.png',
  },
];
```

### Content Structure

```
src/
├── data/
│   ├── 01_Song-View.md          # Markdown documentation
│   ├── 02_Chain-View.md
│   ├── ...
│   ├── content.ts               # Auto-generated content bundle
│   └── index.ts                 # Section configuration
├── images/
│   ├── 01_song-view.png         # Interface screenshots
│   ├── 02_chain-view.png
│   ├── ...
│   └── index.ts                 # Image asset imports
└── components/
    ├── DocumentationViewer.tsx  # Markdown renderer
    ├── NavigationTabs.tsx       # Bottom navigation
    └── ThemeToggle.tsx          # Dark mode toggle
```

## Architecture

- **Framework**: React 19 with TypeScript
- **Runtime**: Bun (fast JavaScript runtime)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Markdown**: react-markdown with GitHub Flavored Markdown
- **Assets**: Bundled images with Bun's asset processing
- **State**: React hooks for theme and navigation

## Keyboard Shortcut Styling

The documentation uses special styling for M8 keyboard shortcuts:
- `**[EDIT]**` renders as highlighted blue badges
- `**[SHIFT]+[UP]**` renders as connected key combinations
- Regular `code` blocks use monospace styling

## Development

### Project Structure
- `/src/App.tsx` - Main application component
- `/src/components/` - React components
- `/src/data/` - Documentation content and configuration
- `/src/images/` - Interface screenshots and asset management
- `/styles/globals.css` - Theme configuration and CSS variables

### Scripts
- `bun dev` - Development server with hot reload
- `bun run build` - Production build
- `bun run generate-content` - Regenerate content from markdown files

### Theme System
The site uses CSS custom properties for theming:
- Light/dark mode defined in `/styles/globals.css`
- Automatic system preference detection
- Manual toggle with localStorage persistence

## Contributing

1. **Documentation Updates**: Edit markdown files in `/src/data/`
2. **Image Updates**: Add screenshots to `/src/images/` and update imports
3. **Feature Development**: Follow existing component patterns
4. **Styling**: Use Tailwind classes and existing theme variables

## Technical Notes

- **Asset Bundling**: Images must be explicitly imported for Bun processing
- **Content Generation**: Run `generate-content` script after markdown changes
- **Mobile Optimization**: Bottom navigation for thumb-friendly access
- **Performance**: Lazy loading for images, bundled content for fast access

This project provides a comprehensive, mobile-optimized documentation experience for Dirtywave M8 users.
