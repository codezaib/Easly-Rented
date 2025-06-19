import Card from "./Minor/Card";

const CardsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-6 px-8 my-[50px]">
      <Card
        image="https://placehold.co/300x200"
        title="Card One"
        description="This is a short description for the first card."
        btn="Give on Rent"
      />
      <Card
        image="https://placehold.co/300x200"
        title="Card Two"
        description="This is a short description for the second card."
        btn="Take on Rent"
      />
    </div>
  );
};

export default CardsSection;
