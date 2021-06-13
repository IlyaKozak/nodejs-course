import { StatusCodes, ReasonPhrases } from 'http-status-codes';

class ValidationError extends Error {
  status = StatusCodes.BAD_REQUEST;

  text = ReasonPhrases.BAD_REQUEST;
}

export default ValidationError;
