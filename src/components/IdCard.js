const IdCard = (props) => {

    const { picture, firstName, lastName, gender, height, birth } = props
    return (
        <div className="IdCard">
            <div className="id-img-container">
                <img src={picture} alt="imageId" />
        <p>
            <b>First name:</b> {firstName}
        </p>
        <p>
            <b>Last name:</b> {lastName}
        </p>
        <p>
            <b>Gender:</b> {gender}
        </p>
        <p>
            <b>Height:</b> {String(height)[0] + '.' + String(height).slice(1)}
        </p>
        <p>
        <b>Birth:</b> {String(birth).slice(0, 15)} 
        </p>
        </div>
        </div>
    )
}

export default IdCard

// <IdCard
//   lastName='Doe'
//   firstName='John'
//   gender='male'
//   height={178}
//   birth={new Date("1992-07-14")}
//   picture="https://randomuser.me/api/portraits/men/44.jpg"
// />

// <IdCard
//   lastName='Delores '
//   firstName='Obrien'
//   gender='female'
//   height={172}
//   birth={new Date("1988-05-11")}
//   picture="https://randomuser.me/api/portraits/women/44.jpg"
// />
