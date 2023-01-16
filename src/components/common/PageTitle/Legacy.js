import arrow from "../../../styles/images/arrow.svg"

const PageTitle = ({ children }) => {
  return (
    <div className="section section1">
      <div className="section-title" style={{ textAlign: "left", display: "flex", align: "center", paddingTop: 25 }}>
        <img
          src={arrow}
          style={{ marginLeft: 12, marginRight: 18 }}
          alt=""
          onClick={() => {
            window.history.back()
          }}
        />
        {children}
      </div>
    </div>
  )
}

export default PageTitle
