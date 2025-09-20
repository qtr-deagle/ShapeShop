import { FourSquare } from "react-loading-indicators"

const override = {
    display: "block",
    margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <FourSquare
      color="#FFFFFF"
      loading={loading}
      cssOverride={override}
      size={150} />
  )
}

export default Spinner