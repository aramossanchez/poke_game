import { useState } from "react";

export default function useHeaderComponent () {

  const [opened, setOpened] = useState(false);

  return {
    opened,
    setOpened
  }
}