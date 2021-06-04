import { StatusCodes, ReasonPhrases } from 'http-status-codes';

class HTTPError extends Error {
  status: StatusCodes;

  text: ReasonPhrases;

  constructor(status: StatusCodes, text: ReasonPhrases, message?: string) {
    super(message);
    this.status = status;
    this.text = text;
  }
}

export default HTTPError;
