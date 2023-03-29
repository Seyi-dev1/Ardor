import { AiFillCreditCard, AiFillBank } from "react-icons/ai";
import { MdSavings, MdEnergySavingsLeaf } from "react-icons/md";
export const summaryData = [
  {
    id: 1,
    name: "BHB CHECKING",
    number: "9047",
    amount: 2457.56,
    info: "Available Balance",
    icon: <MdSavings className="summary_icon" />,
  },
  {
    id: 2,
    name: "THRIVE SAVINGS",
    number: "7548",
    amount: 84057.23,
    info: "Available Balance",
    icon: <AiFillBank className="summary_icon" />,
  },
  {
    id: 3,
    name: "OPD SAVINGS",
    number: "0043",
    amount: 76340.04,
    info: "Available Balance",
    icon: <MdEnergySavingsLeaf className="summary_icon" />,
  },
  {
    id: 4,
    name: "HORIZON LEGACY SAVINGS",
    number: "9810",
    amount: 234257.55,
    info: "Available Balance",
    icon: <MdSavings className="summary_icon" />,
  },
  {
    id: 5,
    name: "BLUE CREDIT CARD",
    number: "65265",
    amount: 447.12,
    info: "Outstanding Balance",
    icon: <AiFillCreditCard className="summary_icon" />,
  },
];
