import response from '../../network/response';

const scopesValidationHandler = (allowedScopes) => {
  return (req, res, next) => {
    if (!req.user || (req.user && !req.user.scopes)) {
      response.error(req, res, 401, 'Unauthorized', 'Authorization Error');
    }

    const hasAcces = allowedScopes
      .map((allowedScope) => req.user.scopes.includes(allowedScope))
      .find((item) => Boolean(item));

    if (hasAcces) {
      next();
    } else {
      response.error(req, res, 401, 'Permission denied', 'Scopes Error');
    }
  };
};
export default scopesValidationHandler;
