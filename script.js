const data = '{"id":59316863,"username":"f_account","scratchteam":true,"history":{"joined":"2020-04-15T09:08:51.000Z"},"profile":{"id":58388230,"images":{"90x90":"https://cdn2.scratch.mit.edu/get_image/user/59316863_90x90.png?v=","60x60":"https://cdn2.scratch.mit.edu/get_image/user/59316863_60x60.png?v=","55x55":"https://cdn2.scratch.mit.edu/get_image/user/59316863_55x55.png?v=","50x50":"https://cdn2.scratch.mit.edu/get_image/user/59316863_50x50.png?v=","32x32":"https://cdn2.scratch.mit.edu/get_image/user/59316863_32x32.png?v="},"status":" \n Iâ€™m baaaack!i got locked out.\n                              Oã€°O","bio":"âœ¦      \nHi there! iâ€™m a\n9 Year oldâ€¦ iOS developer, graphics designer and pianist\nI am also Iegend- and CurveFoId \nOriginally i joined in June 17 2019 on the acc\n@asdgame\nI am @chasmX","country":"United Kingdom"}}'

fetch('https://api.scratch.mit.edu/users/f_account/', {
        method: 'PUT',
        body: data
    })
