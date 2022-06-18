import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image="https://i.pinimg.com/564x/f7/a1/f2/f7a1f2b35fd9bd691fdd0772e74916b5.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1327699855326797826/af7CnmGS_400x400.jpg"
                title="crisx"
            />
            <Story
                image="https://i.pinimg.com/564x/2a/15/66/2a1566e233d782d0482d72d8b2456150.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1509813890171170819/RQktRjgV_400x400.jpg"
                title="shio_futariclip"
            />
            <Story
                image="https://i.pinimg.com/564x/cb/06/02/cb0602553a590f15b369953c693e8f85.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1206370620247662593/wc3HwTSe_400x400.jpg"
                title="akagamikun3715"
            />
            <Story
                image="https://i.pinimg.com/564x/e2/80/df/e280dfcb9320b1423913d9ee73a21e39.jpg"
                profileSrc="https://pbs.twimg.com/profile_images/1482831151685578755/EE8y9h99_400x400.jpg"
                title="nekura_ganbaro"
            />
            <Story
                image="https://i.pinimg.com/564x/22/e3/62/22e36287d7907c0da51993ec7b725840.jpg"
                profileSrc="https://i.pinimg.com/280x280_RS/07/14/01/07140147263bb290a77f5fd7212d7fb3.jpg"
                title="Hanna"
            />
        </div>
    )
}

export default StoryReel