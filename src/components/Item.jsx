    const Item = ({ item,onDelete }) => {

        // Render a single item
        // Add a Delete and Edit button
        // return null;
        return(
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>{item.name}</span>
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        )
    };

    export default Item;
