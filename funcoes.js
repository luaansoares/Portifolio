let h1 = document.querySelector('digitacao')
let texto = 'Aprendiz da tecnologia!';

texto.split(' ').forEach((l, index) => {
    setTimeout(() => {
        h1.innerHTML += l

    }, 80 * index)
})