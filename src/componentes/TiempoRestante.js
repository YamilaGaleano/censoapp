const TiempoRestante = () => {

    return (
        <div className="card col-4 second ">
            <div className="card-body">
                <h6 className="card-title">Tiempo restante</h6>
                <div id="countdown">
                    <ul>
                        <li><span id="days"></span>days</li>
                        <li><span id="hours"></span>Hours</li>
                        <li><span id="minutes"></span>Minutes</li>
                        <li><span id="seconds"></span>Seconds</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TiempoRestante