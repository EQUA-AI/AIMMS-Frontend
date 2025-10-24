# Quick Reference Guide

## Epcon AIMMS Branding Plugin - Cheat Sheet

### Installation (Quick)

```bash
cd /path/to/EpconBrandingPlugin
./install.sh
```

### Installation (Manual)

```bash
# 1. Install package
pip install -e .

# 2. Copy plugin
docker cp epcon_branding inventree-server:/home/inventree/data/plugins/

# 3. Copy template
docker cp index-epcon.html inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html

# 4. Collect static files
docker exec inventree-server invoke static

# 5. Restart server
docker compose restart inventree-server
```

### Verification

```bash
# Check plugin is loaded
docker exec inventree-server ls -la /home/inventree/data/plugins/epcon_branding

# Check static files
docker exec inventree-server ls -la /home/inventree/data/static/plugins/epcon-branding

# Check template
docker exec inventree-server grep "Epcon AIMMS Branding" /home/inventree/src/backend/InvenTree/web/templates/web/index.html

# View logs
docker logs inventree-server | grep -i epcon
```

### Browser Console Messages

Expected output when working:
```
🚀 Epcon AIMMS Branding: Initializing...
✅ Epcon AIMMS Branding: X replacements made
🖼️ Replaced logo: <img>
👀 Epcon AIMMS Branding: Observer active
```

### Settings Location

**Admin Interface:**
`Settings → Admin Center → Plugins → Epcon AIMMS Branding`

**Available Settings:**
- Enable Epcon Branding (default: true)
- Enable Custom Logo (default: true)
- Rename Manufacturing to Machines (default: true)

### File Locations

| Component | Container Path | Description |
|-----------|---------------|-------------|
| Plugin | `/home/inventree/data/plugins/epcon_branding/` | Main plugin code |
| Logo | `/home/inventree/data/plugins/epcon_branding/static/equa-logo.png` | Source logo |
| Static Logo | `/home/inventree/data/static/plugins/epcon-branding/equa-logo.png` | Served logo |
| Template | `/home/inventree/src/backend/InvenTree/web/templates/web/index.html` | Modified template |

### Troubleshooting Commands

```bash
# Plugin not showing
docker exec inventree-server invoke plugins | grep -i epcon

# Logo not loading
docker exec inventree-server ls -lh /home/inventree/data/static/plugins/epcon-branding/equa-logo.png

# Branding not working
docker exec inventree-server grep -c "Epcon AIMMS" /home/inventree/src/backend/InvenTree/web/templates/web/index.html

# Restart everything
docker compose restart
```

### Common Issues

| Issue | Solution |
|-------|----------|
| Plugin not visible | Activate in Admin Center → Plugins |
| Text not replaced | Verify template modification, hard refresh browser |
| Logo 404 error | Run `docker exec inventree-server invoke static` |
| Changes not applied | Clear browser cache (Cmd+Shift+R) |

### Update After InvenTree Upgrade

```bash
# 1. Back up current template
docker cp inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html index-backup.html

# 2. Update InvenTree
docker compose pull
docker compose up -d

# 3. Reapply template
docker cp index-epcon.html inventree-server:/home/inventree/src/backend/InvenTree/web/templates/web/index.html

# 4. Restart
docker compose restart inventree-server
```

### Development

```bash
# Edit plugin
vim epcon_branding/__init__.py

# Copy to container
docker cp epcon_branding inventree-server:/home/inventree/data/plugins/

# Restart and test
docker compose restart inventree-server
```

### Building Distribution Package

```bash
# Install build tools
pip install build twine

# Build package
python -m build

# Result: dist/inventree-epcon-branding-1.0.0.tar.gz
#         dist/inventree_epcon_branding-1.0.0-py3-none-any.whl
```

### URLs

- **Logo URL:** `http://inventree.localhost/static/plugins/epcon-branding/equa-logo.png`
- **Plugin API:** `http://inventree.localhost/api/plugins/`
- **Static Files:** `http://inventree.localhost/static/plugins/`

### Key Files Summary

```
📦 EpconBrandingPlugin/
├── 📄 README.md              - Main documentation
├── 📄 pyproject.toml         - Package configuration  
├── 📄 LICENSE                - MIT License
├── 📄 CHANGELOG.md           - Version history
├── 📄 CONTRIBUTING.md        - Contribution guide
├── 📄 .gitignore             - Git ignore rules
├── 🔧 setup.py               - Setup script
├── 🔧 install.sh             - Auto-installer
├── 📄 index-epcon.html       - Modified template
└── 📁 epcon_branding/
    ├── 🐍 __init__.py        - Plugin class (192 lines)
    ├── 🐍 _version.py        - Version info
    └── 📁 static/
        └── 🖼️ equa-logo.png   - Custom logo (37KB)
```

### Support

- 📧 Email: admin@epcon.com
- 🐛 Issues: GitHub Issues
- 📖 Docs: README.md

---

**Quick Start:** Run `./install.sh` → Activate in Admin → Refresh Browser ✨
