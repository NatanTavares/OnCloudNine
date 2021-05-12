import { useState } from "react";
import ReactSwitch from "react-switch";

import {
  IoSyncOutline,
  IoSunnyOutline,
  IoPartlySunnyOutline,
  IoMoonOutline,
  IoCloudyNightOutline,
  IoCloudOutline,
  IoRainyOutline,
  IoThunderstormOutline,
  IoSnowOutline,
} from "react-icons/io5";

import styles from "../styles/components/Header.module.css";

export function Header() {
  const [inImperialMeasure, setInImperialMeasure] = useState(true);

  function renderTheCurrentWeatherIcon(option: number) {
    switch (option) {
      case 0:
        return <IoSunnyOutline title="Sunny" size={30} />;

      case 1:
        return <IoPartlySunnyOutline title="Partly sunny" size={30} />;

      case 2:
        return <IoMoonOutline title="Moon" size={30} />;

      case 3:
        return <IoCloudyNightOutline title="Cloudy night" size={30} />;

      case 4:
        return <IoCloudOutline title="Cloud" size={30} />;

      case 5:
        return <IoRainyOutline title="Rainy" size={30} />;

      case 6:
        return <IoThunderstormOutline title="Thunderstorm" size={30} />;

      case 7:
        return <IoSnowOutline title="Snow" size={30} />;

      default:
        console.error(">[renderTheCurrentWeatherIcon]: Icon found out!");
        return null;
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <section>
          <div>
            <span>Partly cloudy</span>
            <div>
              <p>Cape Town</p>
              <button>
                <IoSyncOutline size={20} title="Change city" />
              </button>
            </div>
            <strong>53,6°F</strong>
          </div>

          <div>
            <span>Thursday</span>
            <p>11 March</p>
            {renderTheCurrentWeatherIcon(1)}
          </div>
        </section>

        <div className={styles.switchesContainer}>
          <p>
            <span className={!inImperialMeasure && styles.enabled}>°F</span>/
            <span className={!!inImperialMeasure && styles.enabled}>°C</span>
          </p>

          <div className={styles.switch}>
            <ReactSwitch
              checked={inImperialMeasure}
              onChange={() => setInImperialMeasure(!inImperialMeasure)}
              height={14}
              width={24}
              handleDiameter={14}
              borderRadius={10}
              onHandleColor={"#ffffff"}
              offHandleColor={"#ffffff"}
              checkedIcon={false}
              uncheckedIcon={false}
              onColor={"#8D9BBA"}
              offColor={"#8D9BBA"}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
