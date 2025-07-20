import "./style.css"

const Project = () => {

    return (
        <>
            <div className="Project">
                <div className="sub-header-2"
                    style={{
                        backgroundImage:
                            "linear-gradient(#FFC837, #FF8008)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "50vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div className="txt-box">
                        <h1>Project</h1>
                    </div>
                </div>

                <div className="txt-box-2">
                    <h1>Our Project</h1>
                </div>
                <div className="pj">
                    <div className="research">
                        <h1>Reports</h1>
                        <div className="montly"><a href="#">September Montly Report</a></div>
                        <div className="montly"><a href="#">October Montly Report</a></div>
                        <div className="montly"><a href="#">November Montly Report</a></div>
                        <div className="montly"><a href="#">December Montly Report</a></div>
                    </div>
                    <div className="investment">
                        <h1>Investments</h1>
                        <div className="montly"><a href="#">September Presentation</a></div>
                        <div className="montly"><a href="#">October Presentation</a></div>
                        <div className="montly"><a href="#">November Presentation</a></div>
                        <div className="montly"><a href="#">December Presentation</a></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Project;