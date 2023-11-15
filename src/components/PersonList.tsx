type PersonListProps = {
    names: {
        first: String,
        last: String
    }[]

}

function PersonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map((item, index) => {
                return (
                    <h2 key={index}>{item.first} {item.last}</h2>
                )
            })}
        </div>
    )
}

export default PersonList