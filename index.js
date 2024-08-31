
for(let i = 0;i <100;i++){
    const parent = document.querySelector('body')
    const body_end = document.querySelector('#body-end')
    const body_height = parent.clientHeight
    const body_width = parent.clientWidth

    const random_height =  Math.random() * body_height - 50
    const random_width = (Math.random() * body_width) * 5

    const custom_element = document.createElement('div')
    custom_element.classList.add('snowflake')
    custom_element.classList.add('snowflake-animate')
    custom_element.style.top = `${random_height}px`
    custom_element.style.left = `${Math.floor(random_width)}px`
    custom_element.style.animationDelay = `${Math.random()*100}s`

    document.querySelector('.snowflake-container').insertBefore(custom_element,body_end)
    document.querySelector('.snowflake-container').style.height = `${document.body.scrollHeight-100}px`
}