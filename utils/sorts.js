const User = require("../repository/userRepository");
const user = new User();

const sortByName = () => {
    user.getByName
    .then((resp) => {
      console.log("blah2", resp);
      res.render("users", {
        users: data,
        pageTitle: "Clientes",
      });
    })
    .catch();
}