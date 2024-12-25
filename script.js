function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.textContent = '❄';
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

function startSnowfall() {
    setInterval(createSnowflake, 200);
}

const canvas = document.getElementById('treeCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

