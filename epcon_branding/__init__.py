"""
Epcon AIMMS Branding Plugin for InvenTree
==========================================

This plugin provides comprehensive branding customization for InvenTree,
replacing default "InvenTree" branding with "Epcon AIMMS" throughout the
user interface.

Features:
- Text replacement: "InvenTree" → "Epcon AIMMS"
- Text replacement: "Manufacturing" → "Machines"
- Logo replacement with custom Equa logo
- Dynamic content handling with MutationObserver
- Zero performance impact

Note: This plugin requires a modified index.html template for full functionality.
See README.md for installation instructions.

Author: Epcon
License: MIT
Version: 1.0.0
"""

from plugin import InvenTreePlugin
from plugin.mixins import SettingsMixin, UserInterfaceMixin

try:
    from ._version import __version__, __author__, __email__, __license__
except ImportError:
    __version__ = "1.0.0"
    __author__ = "Epcon"
    __email__ = "admin@epcon.com"
    __license__ = "MIT"


class EpconBrandingPlugin(SettingsMixin, UserInterfaceMixin, InvenTreePlugin):
    """
    Epcon AIMMS Branding Plugin for InvenTree.
    
    Provides comprehensive branding customization including:
    - Global text replacement
    - Custom logo integration
    - Navigation menu customization
    
    This plugin works in conjunction with a modified base HTML template
    to provide seamless branding updates throughout the application.
    """

    NAME = "Epcon AIMMS Branding"
    SLUG = "epcon-branding"
    TITLE = "Epcon AIMMS Branding Plugin"
    DESCRIPTION = (
        "Replaces 'InvenTree' with 'Epcon AIMMS' and 'Manufacturing' with 'Machines' "
        "throughout the UI. Includes custom logo integration."
    )
    VERSION = __version__
    AUTHOR = __author__
    WEBSITE = "https://github.com/epcon/inventree-epcon-branding"
    LICENSE = __license__
    
    # Minimum InvenTree version required
    MIN_VERSION = "0.13.0"
    MAX_VERSION = None
    
    # Plugin settings
    SETTINGS = {
        'ENABLE_BRANDING': {
            'name': 'Enable Epcon Branding',
            'description': 'Enable/disable Epcon AIMMS branding throughout the UI',
            'validator': bool,
            'default': True,
        },
        'ENABLE_LOGO': {
            'name': 'Enable Custom Logo',
            'description': 'Replace InvenTree logo with Equa logo',
            'validator': bool,
            'default': True,
        },
        'ENABLE_MANUFACTURING_RENAME': {
            'name': 'Rename Manufacturing to Machines',
            'description': 'Change "Manufacturing" menu items to "Machines"',
            'validator': bool,
            'default': True,
        },
    }
    
    def get_ui_features(self, feature_type, context, request):
        """
        Return UI features for this plugin.
        
        Note: This plugin uses template-level injection for branding,
        so no UI features are returned here.
        """
        return []
    
    def get_ui_panels(self, request, context, **kwargs):
        """
        Inject UI panels (not used for branding).
        
        The actual branding is done via template modification.
        This method is kept for potential future extensions.
        """
        if not self.get_setting('ENABLE_BRANDING'):
            return []
        
        return []
    
    def get_ui_dashboard_items(self, request, context, **kwargs):
        """
        Inject dashboard items (not used for branding).
        
        The actual branding is done via template modification.
        This method is kept for potential future extensions.
        """
        if not self.get_setting('ENABLE_BRANDING'):
            return []
            
        return []
    
    def get_custom_panels(self, view, request):
        """
        Return custom panels for specific views.
        
        Currently not used, but available for future extensions.
        """
        return []
