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

    // --- 3. ACCORDION FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Fecha outros itens (opcional - remova se quiser múltiplos abertos)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle do item clicado
                item.classList.toggle('active');
            });
        });
    }

    // --- 4. FORMULÁRIOS ---
    const contactForm = document.getElementById('contactForm');
    const trialForm = document.getElementById('trialForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simula envio (em produção, conectar com backend)
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
            
            // Opcional: Redirecionar para WhatsApp
            const message = `Olá! Meu nome é ${data.name}. ${data.message}`;
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            // window.open(whatsappUrl, '_blank');
        });
    }
    
    if (trialForm) {
        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(trialForm);
            const data = Object.fromEntries(formData);
            
            // Redireciona para WhatsApp com dados pré-preenchidos
            const message = `Olá! Gostaria de agendar uma aula experimental gratuita.\n\nNome: ${data.name}\nEmail: ${data.email}\nWhatsApp: ${data.phone}\nNível: ${data.level}\nObjetivo: ${data.goal}\nPreferência de horário: ${data.preference || 'Flexível'}`;
            const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            alert('Redirecionando para o WhatsApp...');
            trialForm.reset();
        });
    }

    // --- 5. ANIMAÇÃO DE SCROLL (Nova Aba Metodologia) ---
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