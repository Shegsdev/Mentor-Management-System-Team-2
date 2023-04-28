import React, { useEffect, useState } from "react";
import styles from "../componentStyles/privacy.module.scss"
import ToggleInput from "components/ToggleInput";

import { fetchPrivacySettings, updatePrivacySettings } from "pages/api/setting";

const inputFields = [
  {
    name: "showContactInfo",
    label: "Show contact info",
  },
  {
    name: "showGithubInfo",
    label: "Show GitHub",
  },
  {
    name: "showInstagramInfo",
    label: "Show Instagram",
  },
  {
    name: "showLinkedinInfo",
    label: "Show LinkedIn",
  },
  {
    name: "showTwitterInfo",
    label: "Show Twitter",
  }
];
const Privacy = () => {
  const [state, setState] = useState(() => Object.fromEntries(inputFields.map(input => [input.name, false])));
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const getSettings = async () => {
      try {
        const { data } = await fetchPrivacySettings();
        setSettings(data);
      } catch (error) {}
    }

    getSettings();
  }, []);
  
  const handleChange = (name) => {
    setState((prevState) => {
      return {
        ...prevState, [name]: !prevState[name]
      }
    });
  };

  const handleUpdate = async () => {
    const payload = {
      privacy: settings
    };
    try {
      const response = await updatePrivacySettings(payload);
      if (response.status == 200) {
        // handle success
      }
    } catch (error) {}
  };

  return (
    <div className={styles.main}>
      {inputFields.map((field) => (
        <ToggleInput
          key={field.name}
          label={field.label}
          checked={state[field.name]}
          handleChange={() => handleChange(field.name)} />
      ))}
    </div>
  );
}

export default Privacy;

