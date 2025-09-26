import BandData from "./api.js";
import showError from "./error.js";

const BandList = async search => {
    const data = await BandData(search)

    if (data.error) {
        showError(data.error)
        return
    }

    console.log(data);
}

export default BandList