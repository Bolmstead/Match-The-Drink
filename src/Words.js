import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
const iconArray = [
  <CoffeeIcon key="coffee" sx={{ fontSize: "70px", color: "#967259" }} />,
  <EmojiFoodBeverageIcon key="tea" sx={{ fontSize: "70px", color: "green" }} />,
  <WineBarIcon key="wine" sx={{ fontSize: "70px", color: "#EE4B2B" }} />,
  <SportsBarIcon key="beer" sx={{ fontSize: "70px", color: "#FBB117" }} />,
  <LocalDrinkIcon key="water" sx={{ fontSize: "70px", color: "#57b9ff" }} />,
];

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function mixDrinks(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const generateWordSet = async () => {
  const todaysDrinkOrder = mixDrinks(iconArray);
  console.log("🚀 ~ generateWordSet ~ todaysDrinkOrder:", todaysDrinkOrder);
  return todaysDrinkOrder;
};
