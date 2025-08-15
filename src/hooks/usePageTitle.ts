import { useEffect } from "react";

const APP_NAME = "Radix MEAL";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | ${APP_NAME}`;
  }, [title]);
};
