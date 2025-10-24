/**
 * Epcon AIMMS Branding Override
 * Replaces "InvenTree" with "Epcon AIMMS" throughout the UI
 */

function applyBranding() {
    console.log('🔧 Applying Epcon AIMMS branding...');
    let changesMade = 0;
    
    // Replace all text nodes containing "InvenTree"
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null
    );
    
    const nodesToUpdate = [];
    let node;
    
    while (node = walker.nextNode()) {
        if (node.nodeValue && /InvenTree/i.test(node.nodeValue)) {
            nodesToUpdate.push(node);
        }
    }
    
    // Apply replacements
    nodesToUpdate.forEach(n => {
        const oldValue = n.nodeValue;
        n.nodeValue = n.nodeValue.replace(/InvenTree/gi, 'Epcon AIMMS');
        if (n.nodeValue !== oldValue) {
            changesMade++;
        }
    });
    
    // Update document title
    if (document.title && document.title.includes('InvenTree')) {
        document.title = document.title.replace(/InvenTree/gi, 'Epcon AIMMS');
        changesMade++;
    }
    
    // Update attributes
    document.querySelectorAll('[title*="InvenTree"], [aria-label*="InvenTree"], [placeholder*="InvenTree"]').forEach(el => {
        if (el.title) {
            el.title = el.title.replace(/InvenTree/gi, 'Epcon AIMMS');
            changesMade++;
        }
        if (el.getAttribute('aria-label')) {
            el.setAttribute('aria-label', el.getAttribute('aria-label').replace(/InvenTree/gi, 'Epcon AIMMS'));
            changesMade++;
        }
        if (el.placeholder) {
            el.placeholder = el.placeholder.replace(/InvenTree/gi, 'Epcon AIMMS');
            changesMade++;
        }
    });
    
    if (changesMade > 0) {
        console.log(`✅ Epcon AIMMS branding: ${changesMade} replacements made`);
    } else {
        console.log('ℹ️ Epcon AIMMS branding: No changes needed this cycle');
    }
    
    return changesMade;
}

// Set up continuous monitoring
function initBranding() {
    console.log('🚀 Initializing Epcon AIMMS branding...');
    
    // Apply immediately
    applyBranding();
    
    // Apply again after delays (for React rendering)
    setTimeout(() => applyBranding(), 100);
    setTimeout(() => applyBranding(), 300);
    setTimeout(() => applyBranding(), 500);
    setTimeout(() => applyBranding(), 1000);
    setTimeout(() => applyBranding(), 2000);
    
    // Set up observer for continuous monitoring
    if (!window.epconObserver) {
        window.epconObserver = new MutationObserver((mutations) => {
            let needsUpdate = false;
            
            for (const mutation of mutations) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    needsUpdate = true;
                    break;
                }
            }
            
            if (needsUpdate) {
                setTimeout(() => applyBranding(), 10);
            }
        });
        
        window.epconObserver.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true
        });
        
        console.log('👀 Epcon AIMMS observer is active');
    }
    
    console.log('✨ Epcon AIMMS branding initialized successfully');
}

// Export function for InvenTree plugin system
export function renderBranding(target, data) {
    // Hide the panel/dashboard item
    if (target) {
        target.style.display = 'none';
    }
    
    // Initialize branding
    initBranding();
    
    // Return empty to avoid rendering anything
    return null;
}
