const btn = document.getElementById('btn')

btn.addEventListener('click', async function () { //función anónima
    const module = await import('./module.js')
    console.log(module);
    module.worlds();
    btn.classList.add('inactive')
})
//06..