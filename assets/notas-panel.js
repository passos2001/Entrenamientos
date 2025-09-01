// assets/notas-panel.js
(() => {
    const BUTTON_IDS = ['btnNotas', 'openNotes', 'btn-notas'];

    function findButton() {
        for (const id of BUTTON_IDS) {
            const b = document.getElementById(id);
            if (b) return b;
        }
        // fallback por texto
        const nodes = document.querySelectorAll('.tab-button, button');
        for (const n of nodes) {
            if (n.textContent && n.textContent.trim().toLowerCase() === 'notas') return n;
        }
        return null;
    }

    function resolveNotasPath() {
        // si la página ya está dentro de /pages/, cargar notas.html relativo
        return window.location.pathname.includes('/pages/') ? 'notas.html' : 'pages/notas.html';
    }

    let overlay = null;

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'notas-overlay';
        overlay.innerHTML = `
      <div class="notas-sidebar" role="dialog" aria-label="Panel de Notas">
        <div class="notas-toolbar">
          <div class="notas-title">Notas</div>
          <button class="notas-close" aria-label="Cerrar notas">&times;</button>
        </div>
        <iframe class="notas-iframe" src="${resolveNotasPath()}" title="Notas"></iframe>
      </div>
    `;
        document.body.appendChild(overlay);

        // listeners
        overlay.querySelector('.notas-close').addEventListener('click', closePanel);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closePanel(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });
    }

    function openPanel(button) {
        if (!overlay) createOverlay();
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (button) button.classList.add('active');
    }

    function closePanel() {
        if (!overlay) return;
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        const btn = findButton();
        if (btn) btn.classList.remove('active');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const btn = findButton();
        if (!btn) {
            console.warn('Botón "Notas" no encontrado en la página.');
            return;
        }
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openPanel(btn);
        });
    });
})();
