const BASE_URL = "https://dog.ceo/api/breeds/list/all";

export type Breeds = {
  [index: string]: string[];
};

export type AllBreedsResponse = {
  message: Breeds;
};

export const getAllBreeds = async (): Promise<
  AllBreedsResponse | { error: string }
> => {
  try {
    const res = await fetch(BASE_URL);
    if (res.ok) {
      const data: AllBreedsResponse = await res.json();
      return data;
    }

    return {
      error: "There was a problem with the server",
    };
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        error: err.message,
      };
    }

    return {
      error: "There was a problem with the server",
    };
  }
};
