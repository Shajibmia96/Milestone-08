import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const gymData = [
        {
          id: 1,
          name: "Fitness Club",
          features: [
            "Cardio Equipment",
            "Strength Training",
            "Group Classes",
            "Personal Trainer",
            "Locker Rooms",
            "Steam Room",
            "Amir",
            "Tipu"
          ],
          price: 50
        },
        {
          id: 2,
          name: "Muscle Factory",
          features: [
            "Personal Training",
            "Weightlifting Area",
            "Sauna",
            "Nutrition Counseling",
            "Indoor Track",
            "Group Training"
          ],
          price: 70
        },
        {
          id: 3,
          name: "Health Haven",
          features: [
            "Yoga Studio",
            "Pool",
            "Nutrition Counseling",
            "Pilates Classes",
            "Spa Services",
            "Childcare Facilities"
          ],
          price: 60
        },
        {
          id: 4,
          name: "Power House Gym",
          features: [
            "Boxing Ring",
            "CrossFit Area",
            "Massage Therapy",
            "Tanning Beds",
            "Cycling Studio",
            "Juice Bar",
            "Shajib"
          ],
          price: 80
        }
      ];
      
      
      
    return (
        <div className="pl-4"> 
          <h1 className="text-2xl">Best price in the town </h1>
              <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  mx-12">
              {
                 gymData.map( option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
              </div>
        </div>
    );
};

export default PriceOptions;