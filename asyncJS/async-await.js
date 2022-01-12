console.clear();

const getCountries = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let statusCode = 200;
      if (statusCode === 200) {
        resolve({
          json: () => {
            return [
              { id: 1, name: "Canada" },
              { id: 2, name: "Colombia" },
              { id: 3, name: "England" },
              { id: 4, name: "Guatemala" },
              { id: 5, name: "Korea" },
            ];
          },
        });
      } else {
        reject("request error...");
      }
    }, 1500);
  });
};

const writeCountries = async () => {
  try {
    // like fetch api
    let response = await getCountries();
    let json = await response.json();
    console.table(json);
  } catch (error) {
    console.error(error);
  }
};

writeCountries();
