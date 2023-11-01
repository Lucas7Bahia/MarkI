function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // codigo comentado faz a mesma função do toggle('light')
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }
    // else {
    //     html.classList.add('light')
    // }

}