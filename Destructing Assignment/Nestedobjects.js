function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  
  const person = {
    name: "mithun",
    age: 21,
    address: {
      street: "88, Block B, Industrial Area. ",
      city: "62, Noida",
      state: "Uttar pradesh"
    },
  };
  
  const { name, street } = extractNameAndStreet(person);
  console.log(name); // "mithun"
  console.log(street); // "88, Block B, Industrial Area. "
  