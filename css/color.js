const buttons = document.querySelectorAll('.box'); // Assuming 'box' is a class, otherwise use 'box' for tag name
const body = document.querySelector("body");

buttons.forEach(function(box) {
    box.addEventListener('click', function(color) {
        switch(color.target.id) {
            case 'box1':
                body.style.backgroundColor = "#8576FF"
                break;
            case 'box2':
                body.style.backgroundColor = 'aqua';
                break;
            case 'box3':
                body.style.backgroundColor = 'palegreen';
                break;
            case 'box4':
                body.style.backgroundColor = 'blue';
                break;
            case 'box5':
                body.style.backgroundColor = 'red';
                break;
            default:
                // Do something if none of the cases match
                break;
        }
    });
});
