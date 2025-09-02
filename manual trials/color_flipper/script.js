window.onload = function () {
    const body = document.body;
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let color;
            switch (this.className) {
                case 'redBtn':
                    color = 'red';
                    break;
                case 'blueBtn':
                    color = 'blue';
                    break;
                case 'greenBtn':
                    color = 'green';
                    break;
                case 'randomBtn':
                    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
                    break;
            }
            body.style.backgroundColor = color;
        });
    });
}

