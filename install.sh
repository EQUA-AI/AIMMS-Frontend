#!/bin/bash
# Installation script for Epcon AIMMS Branding Plugin

set -e  # Exit on error

echo "🚀 Epcon AIMMS Branding Plugin - Installation Script"
echo "===================================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running in correct directory
if [ ! -f "pyproject.toml" ]; then
    echo -e "${RED}❌ Error: Please run this script from the EpconBrandingPlugin directory${NC}"
    exit 1
fi

echo "📋 Prerequisites check..."

# Check for Python
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ Python 3 is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Python 3 found${NC}"

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Docker found${NC}"

echo ""
echo "📦 Installing package dependencies..."
pip install -e . || {
    echo -e "${RED}❌ Failed to install package${NC}"
    exit 1
}
echo -e "${GREEN}✓ Package installed${NC}"

echo ""
echo "📁 Copying plugin to InvenTree container..."

# Find the container name
CONTAINER=$(docker ps --filter "name=inventree-server" --format "{{.Names}}" | head -1)

if [ -z "$CONTAINER" ]; then
    echo -e "${RED}❌ InvenTree server container not found${NC}"
    echo "   Please ensure InvenTree is running"
    exit 1
fi

echo "   Using container: $CONTAINER"

# Copy plugin directory
docker cp epcon_branding "$CONTAINER:/home/inventree/data/plugins/" || {
    echo -e "${RED}❌ Failed to copy plugin to container${NC}"
    exit 1
}
echo -e "${GREEN}✓ Plugin copied to container${NC}"

# Copy template if it exists
if [ -f "../index-epcon.html" ]; then
    echo ""
    echo "📄 Copying modified template..."
    docker cp ../index-epcon.html "$CONTAINER:/home/inventree/src/backend/InvenTree/web/templates/web/index.html" || {
        echo -e "${YELLOW}⚠️  Warning: Failed to copy template${NC}"
    }
    echo -e "${GREEN}✓ Template copied${NC}"
else
    echo -e "${YELLOW}⚠️  Warning: index-epcon.html not found (required for branding to work)${NC}"
fi

echo ""
echo "🔄 Collecting static files..."
docker exec "$CONTAINER" invoke static || {
    echo -e "${YELLOW}⚠️  Warning: Failed to collect static files${NC}"
}
echo -e "${GREEN}✓ Static files collected${NC}"

echo ""
echo "♻️  Restarting InvenTree server..."
docker compose restart inventree-server || {
    echo -e "${YELLOW}⚠️  Warning: Failed to restart server. Please restart manually.${NC}"
}
echo -e "${GREEN}✓ Server restarted${NC}"

echo ""
echo -e "${GREEN}✅ Installation complete!${NC}"
echo ""
echo "📝 Next steps:"
echo "   1. Navigate to Settings → Admin Center → Plugins"
echo "   2. Find 'Epcon AIMMS Branding'"
echo "   3. Click 'Activate'"
echo "   4. Ensure 'Enable interface integration' is ON"
echo "   5. Refresh your browser (Cmd+Shift+R / Ctrl+Shift+F5)"
echo ""
echo "🎨 Expected changes:"
echo "   • 'InvenTree' → 'Epcon AIMMS'"
echo "   • 'Manufacturing' → 'Machines'"
echo "   • Logo replaced with Equa logo"
echo ""
echo "🔍 Verify by checking browser console for:"
echo "   🚀 Epcon AIMMS Branding: Initializing..."
echo "   ✅ Epcon AIMMS Branding: X replacements made"
echo ""
