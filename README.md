# Epcon AIMMS Branding Plugin for InvenTree

InvenTree plugin that replaces "InvenTree" branding with "Epcon AIMMS" throughout the UI.

## Features

- Replaces "InvenTree" → "Epcon AIMMS"
- Replaces "Manufacturing" → "Machines"  
- Custom Equa logo integration

## Installation

1. Copy the plugin to your InvenTree plugins directory:
```bash
docker cp epcon_branding inventree-server:/home/inventree/data/plugins/
```

2. Copy the modified template:
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

5. Enable the plugin:
   - Go to Settings → Admin Center → Plugins
   - Find "Epcon AIMMS Branding"
   - Click "Activate"

## Verification

Open browser console and look for:
```
🚀 Epcon AIMMS Branding: Initializing...
✅ Epcon AIMMS Branding: X replacements made
```

## License

MIT
