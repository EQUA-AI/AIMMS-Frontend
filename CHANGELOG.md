# Changelog

All notable changes to the Epcon AIMMS Branding Plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-23

### Added
- Initial release of Epcon AIMMS Branding Plugin
- Text replacement: "InvenTree" → "Epcon AIMMS" throughout UI
- Text replacement: "Manufacturing" → "Machines" in navigation
- Custom logo integration (Equa logo replaces InvenTree logo)
- Dynamic content handling using MutationObserver
- Multiple timing strategies to catch React-rendered content
- Comprehensive documentation (README.md)
- Professional package structure with pyproject.toml
- MIT License
- Installation script (install.sh)
- Plugin settings for enabling/disabling features:
  - Enable Epcon Branding
  - Enable Custom Logo
  - Rename Manufacturing to Machines

### Technical Details
- Minimum InvenTree version: 0.13.0
- Python version: 3.9+
- Template-based injection for global branding
- Zero performance impact implementation
- Browser console logging for debugging

### Known Limitations
- Requires modified index.html template (not pure plugin)
- Template modifications may need reapplication after InvenTree updates
- Logo replacement requires static file collection

### Files Included
- `epcon_branding/__init__.py` - Plugin registration
- `epcon_branding/_version.py` - Version information
- `epcon_branding/static/equa-logo.png` - Custom logo (512x512 PNG)
- `pyproject.toml` - Package configuration
- `setup.py` - Setup script
- `README.md` - Comprehensive documentation
- `LICENSE` - MIT License
- `MANIFEST.in` - Package manifest
- `.gitignore` - Git ignore rules
- `install.sh` - Automated installation script
- `index-epcon.html` - Modified InvenTree template

### Documentation
- Installation instructions
- Configuration guide
- Troubleshooting section
- Development guidelines
- Update procedures

---

## [Unreleased]

### Planned Features
- Pure plugin implementation (without template modification)
- Admin panel for customizing branding text
- Support for multiple branding profiles
- Theme integration
- Automated template update script
- Unit tests
- CI/CD pipeline

---

### Version History

- **1.0.0** - 2025-10-23 - Initial Release

For more details, see [README.md](README.md).
