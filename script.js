// Tailwind CSS Configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            colors: {
                bg: "#080809",
                surface: "#0e0e10",
                primary: "#f5f5f5",
                muted: "#8c8c91",
                border: "rgba(255,255,255,.06)"
            },
            boxShadow: {
                panel: "0 30px 80px rgba(0,0,0,.65)"
            }
        }
    }
};

// You can add your custom JavaScript functionality or interactive features below
document.addEventListener('DOMContentLoaded', () => {
    console.log('NOVA Landing Page Initialized.');
});