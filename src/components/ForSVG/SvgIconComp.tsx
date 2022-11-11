import SunnyIcon from "../../assets/weatherApp/SunnyIcon";
import RainyIcon from "../../assets/weatherApp/RainyIcon";
import CloudyIcon from "../../assets/weatherApp/CloudyIcon";
import SnowyIcon from "../../assets/weatherApp/SnowyIcon";

import { weatherIconName } from "../../types/weatherIconName";

interface IProps {
  name: weatherIconName | any;
  width: number;
  height: number;
}

const IconComponentName: any = {
  sunny: <SunnyIcon />,
  rainy: <RainyIcon />,
  cloudy: <CloudyIcon />,
  snowy: <SnowyIcon />,
};

const Icon = (props: IProps) => {
  const name: weatherIconName = props.name;
  const width = props.width;
  const height = props.height;

  return (
    <svg width={width} height={height} viewBox="0 0 48 48">
      {IconComponentName[name]}
    </svg>
  );
};

export { Icon };
