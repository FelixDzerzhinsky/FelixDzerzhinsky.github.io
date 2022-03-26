let counter = 0

const asyncPlus = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof counter === 'undefined') {
                reject()
            } else {
                counter++
                resolve()
            }
        }, 500)
    })
}

const print = () => {
    console.log(counter)
}

const main = () => {
    asyncPlus()
        .then(print)
        .catch(() => {
            console.log('Error!')
        })
}

main()