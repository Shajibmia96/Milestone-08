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
            "Steam Room"
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
            "Juice Bar"
          ],
          price: 80
        }
      ];
      
      
      
    return (
        <div className="pl-4"> 
          <h1 className="text-2xl">Some Price tag in my Gym Center</h1>
              {
                 gymData.map( option => <PriceOption key={option.id} option={option}></PriceOption>)
              }
        </div>
    );
};

export default PriceOptions;