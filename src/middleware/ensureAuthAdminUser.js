export const ensureAuthAdminUser = (...role) => {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      if (role.includes(req.user.role)) {
        return next();
      } else {
        res.redirect("/unauthorized");
      }
    } else {
      res.redirect("/");
    }
  };
};


