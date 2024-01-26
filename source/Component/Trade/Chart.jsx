function Chart() {
	return (
		<div className="Chart d-flex flex-row flex-grow-1">
			<div className="d-flex flex-column flex-grow-1 me-1">
				<div className="Candlestick bg-primary flex-grow-1 p-1 mb-1">
					<div className="Legend d-flex" style={{ font: 'bold .8em Arial, sans-serif' }}>
						<div className="me-3">OPEN</div>
						<div className="me-3">HIGH</div>
						<div className="me-3">LOW</div>
						<div className="me-3">CLOSE</div>
						<div>VOLUME</div>
					</div>
				</div>
				<div className="XScale bg-primary p-3"></div>
			</div>
			<div className="d-flex flex-column">
				<div className="YScale bg-primary flex-grow-1 p-4 mb-1"></div>
				<div className="bg-primary p-3"></div>
			</div>
		</div>
	)
}

export default Chart