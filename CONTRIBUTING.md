# Contributing to Epcon AIMMS Branding Plugin

Thank you for considering contributing to the Epcon AIMMS Branding Plugin! This document provides guidelines for contributing to this project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details**:
  - InvenTree version
  - Python version
  - Browser and version
  - Operating system

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear description** of the feature
- **Use case** - why is this enhancement useful?
- **Proposed implementation** (if you have ideas)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** with clear, descriptive commits
3. **Test your changes** thoroughly
4. **Update documentation** if needed (README.md, CHANGELOG.md)
5. **Follow the code style** (see below)
6. **Submit a pull request** with a clear description

## Development Setup

### Prerequisites

- Python 3.9+
- Docker and Docker Compose
- InvenTree 0.13.0+
- Git

### Setting Up Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/inventree-epcon-branding.git
cd inventree-epcon-branding

# Install in development mode
pip install -e .

# Copy to InvenTree plugins directory
cp -r epcon_branding /path/to/inventree-data/plugins/
```

### Testing Changes

1. **Copy plugin to container**:
   ```bash
   docker cp epcon_branding inventree-server:/home/inventree/data/plugins/
   ```

2. **Restart InvenTree**:
   ```bash
   docker compose restart inventree-server
   ```

3. **Verify in browser**:
   - Open browser console
   - Look for initialization messages
   - Test all branding replacements

## Code Style

### Python

- Follow [PEP 8](https://pep8.org/) style guide
- Use meaningful variable and function names
- Add docstrings to classes and functions
- Keep functions focused and single-purpose

Example:
```python
def get_ui_panels(self, request, context, **kwargs):
    """
    Inject UI panels for the plugin.
    
    Args:
        request: HTTP request object
        context: Context dictionary
        **kwargs: Additional keyword arguments
        
    Returns:
        list: List of panel definitions
    """
    if not self.get_setting('ENABLE_BRANDING'):
        return []
    
    return []
```

### JavaScript

- Use ES6+ syntax
- Add comments for complex logic
- Use `const` and `let`, avoid `var`
- Follow consistent naming conventions

Example:
```javascript
function replaceAllInvenTree() {
    // Walk through all text nodes in the document
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
    );
    
    // Collect nodes to modify
    const nodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.nodeValue && /InvenTree/i.test(node.nodeValue)) {
            nodes.push(node);
        }
    }
    
    // Apply replacements
    nodes.forEach(n => {
        n.nodeValue = n.nodeValue.replace(/InvenTree/gi, 'Epcon AIMMS');
    });
}
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

Examples:
```
feat: Add setting to control logo replacement
fix: Logo not displaying on dark theme
docs: Update installation instructions
refactor: Simplify text replacement logic
```

## Project Structure

```
inventree-epcon-branding/
├── epcon_branding/          # Main plugin package
│   ├── __init__.py          # Plugin class
│   ├── _version.py          # Version info
│   └── static/              # Static assets
│       └── equa-logo.png    # Logo file
├── pyproject.toml           # Package config
├── setup.py                 # Setup script
├── README.md                # Main documentation
├── CHANGELOG.md             # Version history
├── CONTRIBUTING.md          # This file
├── LICENSE                  # MIT License
├── MANIFEST.in              # Package manifest
├── .gitignore               # Git ignore rules
└── install.sh               # Installation script
```

## Documentation

When adding features or making changes:

1. Update `README.md` if user-facing
2. Add entry to `CHANGELOG.md` under `[Unreleased]`
3. Update docstrings in code
4. Add comments for complex logic

## Testing Checklist

Before submitting a pull request, verify:

- [ ] Plugin loads without errors in InvenTree
- [ ] Text replacements work correctly
- [ ] Logo displays in header and sidebar
- [ ] Browser console shows no errors
- [ ] Settings can be changed in admin panel
- [ ] Works in Chrome, Firefox, and Safari
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated
- [ ] No merge conflicts with main branch

## Questions or Need Help?

- Open an issue for questions
- Email: admin@epcon.com
- Check existing documentation and issues first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the Epcon AIMMS Branding Plugin! 🎨
