
const Suspect = ({ id, name, picture, age, balance, company, email }) => {
    return (
        <div className="suspect-item">
            <span>{id}</span>
            <span>{name}</span>
            <img
                src={picture}
                alt={name}
                width={30}
                height={30}
            />
            <span>{age}</span>
            <span>{balance}</span>
            <span>{company}</span>
            <span>{email}</span>
        </div>
    )
}

export default Suspect;