const ItemToShow = ({ item }) => {
  return (
    <>
      <li key={item.id}>
        <div>
          <p className="who-name">{item.name}</p>
          <p className="who-purpose">{item.purpose}</p>
        </div>
        <div>
          <p className="who-staff"> {item.collected}</p>
        </div>
      </li>
    </>
  );
};
export default ItemToShow;
