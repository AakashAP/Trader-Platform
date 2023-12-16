function Chart() {
	return (
		<div className="Chart d-flex flex-row flex-grow-1">
			<div className="d-flex flex-column flex-grow-1 me-1">
				<div className="Candlestick bg-primary flex-grow-1 p-2 mb-1"></div>
				<div className="XScale bg-primary p-4"></div>
			</div>
			<div className="d-flex flex-column">
				<div className="YScale bg-primary flex-grow-1 p-4 mb-1"></div>
				<div className="bg-primary p-4"></div>
			</div>
		</div>
	)
}

export default Chart