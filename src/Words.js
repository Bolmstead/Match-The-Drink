import CoffeeIcon from "@mui/icons-material/Coffee";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import WineBarIcon from "@mui/icons-material/WineBar";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
const iconArray = [
  <CoffeeIcon key="coffee" sx={{ color: "tan" }} />,
  <EmojiFoodBeverageIcon key="tea" sx={{ color: "green" }} />,
  <WineBarIcon key="wine" sx={{ color: "red" }} />,
  <SportsBarIcon key="beer" sx={{ color: "brown" }} />,
  <LocalDrinkIcon key="water" sx={{ color: "light blue" }} />,
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
