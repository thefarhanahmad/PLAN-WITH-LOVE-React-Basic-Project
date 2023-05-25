import Card from "./Card";

function Cards({ myData, removeCard }) {
  return (
    <div className="m-auto w-[1300px] gap-5 flex flex-wrap p-4 justify-between">
      {myData.map((d) => {
        return <Card {...d} key={d.id} removeCard={removeCard} />;
      })}
    </div>
  );
}
export default Cards;
