import NotFoundError from "../errors/NotFoundError.js";

const notFound = (req,res) => {
    throw new NotFoundError("Route Does Not Exist")
}

export default notFound;