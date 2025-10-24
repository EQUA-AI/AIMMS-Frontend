# Epcon AIMMS Branding Plugin for InvenTree

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python Version](https://img.shields.io/badge/python-3.9%2B-blue)](https://www.python.org/downloads/)
[![InvenTree](https://img.shields.io/badge/InvenTree-0.13.0%2B-green)](https://inventree.org/)

A professional InvenTree plugin that replaces default "InvenTree" branding with "Epcon AIMMS" branding throughout the user interface, including custom logo integration.

## Features

- 🎨 **Complete Branding Replacement**: Automatically replaces all instances of "InvenTree" with "Epcon AIMMS"
- 🖼️ **Custom Logo**: Replaces InvenTree logo with Equa logo in header and sidebar
- 🏭 **Manufacturing Rename**: Changes "Manufacturing" to "Machines" in navigation
- 🔄 **Dynamic Updates**: Uses MutationObserver to handle dynamically loaded content
- ⚡ **Zero Performance Impact**: Lightweight implementation with no React rebuilds required
- 🔒 **Non-Invasive**: Works alongside InvenTree updates without modifying core files

## Installation

### Prerequisites

- InvenTree version 0.13.0 or higher
- Python 3.9 or higher
- Docker-based InvenTree deployment (or access to InvenTree plugins directory)

### Method 1: Install from Source (Recommended)

1. Clone or download this repository:
```bash
git clone https://github.com/epcon/inventree-epcon-branding.git
cd inventree-epcon-branding
```

2. Install the plugin in development mode:
```bash
pip install -e .
```

3. Copy the plugin to your InvenTree plugins directory:
```bash
cp -r epcon_branding /path/to/inventree-data/plugins/
```

4. Restart your InvenTree server:
```bash
docker compose restart inventree-server
```

5. Enable the plugin in InvenTree:
   - Navigate to **Settings → Admin Center → Plugins**
   - Find "Epcon AIMMS Branding"
   - Click **Activate**
   - Ensure **"Enable interface integration"** is turned ON

### Method 2: Direct Copy (Simpler)

1. Copy the entire `epcon_branding` directory to your InvenTree plugins directory:
```bash
docker cp epcon_branding inventree-server:/home/inventree/data/plugins/
```

2. Copy the modified template (required for functionality):
```bash
docker cp index-epcon.html inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html
```

3. Collect static files:
```bash
docker exec inventree-server invoke static
```

4. Restart InvenTree:
```bash
docker compose restart inventree-server
```

## Configuration

### Plugin Settings

The plugin includes a setting to enable/disable branding:

- **Enable Epcon Branding**: Toggle the branding replacement on/off
  - Default: `True`
  - Type: Boolean

Access settings via: **Settings → Plugin Settings → Epcon AIMMS Branding**

### Customization

#### Change Branding Text

Edit `/epcon_branding/__init__.py` to modify plugin metadata:

```python
NAME = "Epcon AIMMS Branding"
TITLE = "Epcon AIMMS Branding Plugin"
DESCRIPTION = "Your custom description"
```

#### Replace Logo

1. Replace `epcon_branding/static/equa-logo.png` with your logo
2. Ensure the logo is 512x512 PNG format for best results
3. Run `docker exec inventree-server invoke static` to collect changes

#### Modify Text Replacements

The template injection handles text replacement. To modify:

1. Edit the JavaScript in `index-epcon.html`
2. Find the `replaceAllInvenTree()` function
3. Modify the replacement patterns:

```javascript
n.nodeValue = n.nodeValue.replace(/InvenTree/gi, 'Your Brand');
n.nodeValue = n.nodeValue.replace(/Manufacturing/gi, 'Your Term');
```

## Technical Details

### How It Works

The plugin uses a hybrid approach:

1. **Plugin Registration**: Registers with InvenTree as a standard plugin
2. **Template Injection**: Modifies InvenTree's base HTML template to inject branding JavaScript
3. **Dynamic Replacement**: Uses `MutationObserver` to detect and replace text in real-time
4. **Logo Swapping**: Replaces image sources with custom logo from plugin static files

### Architecture

```
epcon_branding/
├── __init__.py              # Plugin registration and configuration
└── static/
    └── equa-logo.png        # Custom logo (37KB, 512x512 PNG)

index-epcon.html             # Modified InvenTree template with branding script
```

### Browser Compatibility

- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ All modern browsers with MutationObserver support

## Updating InvenTree

⚠️ **Important**: When updating InvenTree, the modified `index.html` template will be overwritten.

### Post-Update Steps

1. Back up your current template:
```bash
docker cp inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html index-backup.html
```

2. After updating InvenTree:
```bash
docker cp index-epcon.html inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html
docker compose restart inventree-server
```

3. Verify branding is active by checking browser console for:
```
🚀 Epcon AIMMS Branding: Initializing...
✅ Epcon AIMMS Branding: X replacements made
```

## Development

### Project Structure

```
inventree-epcon-branding/
├── epcon_branding/          # Main plugin package
│   ├── __init__.py          # Plugin class definition
│   └── static/              # Static assets
│       └── equa-logo.png    # Custom logo
├── pyproject.toml           # Package configuration
├── setup.py                 # Setup script
├── MANIFEST.in              # Package manifest
├── LICENSE                  # MIT License
└── README.md                # This file
```

### Building for Distribution

```bash
# Install build tools
pip install build twine

# Build the package
python -m build

# Upload to PyPI (if publishing)
twine upload dist/*
```

### Testing

Test the plugin locally:

```bash
# Install in development mode
pip install -e .

# Copy to InvenTree plugins directory
cp -r epcon_branding /path/to/inventree-data/plugins/

# Restart InvenTree and verify functionality
```

## Troubleshooting

### Plugin Not Appearing

- Verify plugin is in `/home/inventree/data/plugins/epcon_branding/`
- Check InvenTree logs: `docker logs inventree-server`
- Ensure plugin is activated in Admin Center

### Branding Not Working

1. **Check browser console** for initialization messages
2. **Hard refresh** the page (Cmd+Shift+R / Ctrl+Shift+F5)
3. **Verify template** was copied correctly:
   ```bash
   docker exec inventree-server grep "Epcon AIMMS Branding" /home/inventree/src/backend/InvenTree/web/templates/web/index.html
   ```

### Logo Not Displaying

1. **Verify static files** are collected:
   ```bash
   docker exec inventree-server ls -lh /home/inventree/data/static/plugins/epcon-branding/equa-logo.png
   ```

2. **Recollect static files**:
   ```bash
   docker exec inventree-server invoke static
   ```

3. **Check logo path** in browser Network tab (should be 200 OK)

### Text Replacements Missing

- Replacements happen dynamically; check console for replacement count
- If count is 0, verify the template modification was applied
- Try increasing timeout delays in the script (100ms, 500ms, 1000ms)

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built for [InvenTree](https://inventree.org/) - Open Source Inventory Management
- Developed by Epcon for AIMMS branding customization
- Logo provided by [Equa](https://equa.work/)

## Support

For issues, questions, or contributions:
- 🐛 [Report Issues](https://github.com/epcon/inventree-epcon-branding/issues)
- 📧 Email: admin@epcon.com
- 📖 [InvenTree Documentation](https://docs.inventree.org/)

## Changelog

### Version 1.0.0 (2025-10-23)
- Initial release
- Text replacement: "InvenTree" → "Epcon AIMMS"
- Text replacement: "Manufacturing" → "Machines"
- Logo replacement with Equa logo
- Dynamic content handling with MutationObserver
- Professional package structure with pyproject.toml

---

Made with ❤️ for InvenTree
