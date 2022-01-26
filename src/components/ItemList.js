import Item from "./Item";
import '../scss/components/ItemList.scss';

export default function ItemList({items}) {
    
    return (<div className="itemList__cont">
        {items.map((item) => {
            return <>
                <Item 
                    title={item.title}
                    id={item.id}
                    description={item.description} 
                    price={item.price}
                    pictureUrl={item.pictureUrl}
                   
                />
            </>
        })}
        
    </div>);
}

