import Card from "./home/Card";

const CardsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-6 px-[70px] my-[50px]">
      <Card
        image="https://placehold.co/300x200"
        title="Easly list your products for rent"
        description="Safe and Secured process for renting"
        btn="Give on Rent"
      />
      <Card
        image="https://placehold.co/300x200"
        title="Easily take things on rent"
        description="Safe and Secured process for renting"
        btn="Take on Rent"
      />
    </div>
  );
};

export default CardsSection;
