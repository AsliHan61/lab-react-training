import { useState } from 'react'

function LikeButton() {
    const [likesCount, setLikesCount] = useState(0)

    const colorPlatte = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [background, setBackground] = useState(colorPlatte[likesCount])

    let backgroundStyle = { backgroundColor: `${background}`}

    const hanldeClickButton = () => {
        setLikesCount(likesCount + 1)
        setBackground(colorPlatte[(likesCount +1) % 6])
    }

    return (
        <button
        onClick={hanldeClickButton}
        style={backgroundStyle}
        className="LikeButton"
        >
            {likesCount} Likes 👍
        </button>
    )
}

export default LikeButton