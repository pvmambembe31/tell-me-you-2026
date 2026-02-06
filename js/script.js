document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CURSOR DOURADO COM RASTRO DE ESTRELAS ---
    // Apenas em desktops (onde existe mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor-arrow');
        document.body.appendChild(cursor);

        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            // Move a seta dourada
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // Cria o rastro de estrelas se estiver se movendo
            if (!isMoving) {
                isMoving = true;
                spawnStar(e.clientX, e.clientY);
                setTimeout(() => { isMoving = false; }, 50); // Limita a qtde de estrelas
            }
        });

        function spawnStar(x, y) {
            const star = document.createElement('div');
            star.classList.add('star-trail');
            // Variação aleatória na posição para ficar natural
            const offset = (Math.random() - 0.5) * 20; 
            star.style.left = (x - 5 + offset) + 'px';
            star.style.top = (y - 5 + offset) + 'px';
            document.body.appendChild(star);

            // Remove a estrela do DOM após a animação terminar
            setTimeout(() => {
                star.remove();
            }, 800);
        }
    }

    // --- 2. MAPA INTERATIVO (Aba Jornada) ---
    const mapSteps = document.querySelectorAll('.map-step');

    if (mapSteps.length > 0) {
        mapSteps.forEach((step, index) => {
            step.addEventListener('click', () => {
                // Reseta todos para inativo primeiro
                mapSteps.forEach(s => {
                    s.classList.remove('active');
                    // Opcional: Se quiser que passos anteriores fiquem "completos" (azul)
                    // s.classList.remove('completed'); 
                });
                
                // Marca os anteriores como completados (opcional)
                for(let i = 0; i < index; i++) {
                     mapSteps[i].classList.add('completed');
                }

                // Ativa o passo clicado
                step.classList.add('active');
            });
        });
        // Ativa o primeiro passo por padrão
        mapSteps[0].click();
    }

    // --- 3. ANIMAÇÃO DE SCROLL (Nova Aba Metodologia) ---
    // Usa IntersectionObserver para detectar quando os blocos entram na tela
    const roadBlocks = document.querySelectorAll('.road-block');

    if (roadBlocks.length > 0) {
        const observerOptions = {
            root: null, // viewport
            threshold: 0.3, // dispara quando 30% do elemento está visível
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: parar de observar após aparecer
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        roadBlocks.forEach(block => {
            observer.observe(block);
        });
    }
});