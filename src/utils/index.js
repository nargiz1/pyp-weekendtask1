export const getPayload = (status, payload) => {
    switch (status) {
      case "error":
        return { data: null, status, errors: payload };
      default:
        return { data: payload, status, errors: null };
    }
  };