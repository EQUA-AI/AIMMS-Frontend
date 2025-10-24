"""Epcon AIMMS Branding Plugin for InvenTree."""

from plugin import InvenTreePlugin
from plugin.mixins import SettingsMixin


class EpconBrandingPlugin(SettingsMixin, InvenTreePlugin):
    """Plugin to replace InvenTree branding with Epcon AIMMS branding."""

    NAME = "Epcon AIMMS Branding"
    SLUG = "epcon-branding"
    TITLE = "Epcon AIMMS Branding"
    DESCRIPTION = "Replaces 'InvenTree' with 'Epcon AIMMS' and 'Manufacturing' with 'Machines'"
    VERSION = "1.0.0"
    AUTHOR = "Epcon"
    
    SETTINGS = {
        'ENABLE_BRANDING': {
            'name': 'Enable Branding',
            'description': 'Enable Epcon AIMMS branding',
            'validator': bool,
            'default': True,
        },
    }
