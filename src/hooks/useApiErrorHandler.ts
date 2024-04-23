import {toast} from "react-toastify";

const notify = (error: unknown) => {
  if (error instanceof Error) {
    return toast.error(error.message);
  }

  return toast.error("Something went wrong!");
};
export default () => {
  return async (cb: () => Promise<any | void>): Promise<boolean> => {
    try {
      await cb();
      return true;
    } catch (error) {
      notify(error);
      return false;
    }
  };
};
