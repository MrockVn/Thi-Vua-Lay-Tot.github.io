const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

function toggleDarkMode() {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        document.getElementById('icon').classList.add('bx', 'bxs-sun');
        document.getElementById('icon').classList.remove('bx', 'bxs-moon');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        document.getElementById('icon').classList.add('bx', 'bxs-moon');
        document.getElementById('icon').classList.remove('bx', 'bxs-sun');
    }
}

if (isDarkMode) {
    toggleDarkMode();
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', toggleDarkMode);

        var btn = $('#back2top');
		$(window).scroll(function () {
			if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '800');
		});
