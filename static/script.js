document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.scroll-button');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            const targetId = this.getAttribute('data-target'); // Получаем id целевого элемента
            const targetElement = document.getElementById(targetId); // Находим элемент по id

            // Скрываем все изображения
            document.querySelectorAll('.image-container, .video-container').forEach(container => {
                container.style.display = 'none'; // Скрываем контейнеры
            });

            // Показываем нужный контейнер
            targetElement.style.display = 'block'; // Показываем целевой контейнер

            // Прокручиваем к контенту
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Прокручиваем плавно
        });
    });
});
