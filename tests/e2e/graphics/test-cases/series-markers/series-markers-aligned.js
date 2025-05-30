function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const line = chart.addSeries(LightweightCharts.LineSeries);
	line.setData([
		{ time: '2017-04-11', value: 80.01 },
		{ time: '2017-04-12', value: 96.63 },
		{ time: '2017-04-13', value: 76.64 },
		{ time: '2017-04-14', value: 81.89 },
		{ time: '2017-04-15', value: 74.43 },
		{ time: '2017-04-19', value: 81.89 },
		{ time: '2017-04-20', value: 81.89 },
		{ time: '2017-04-21', value: 81.89 },
		{ time: '2017-04-22', value: 81.89 },
		{ time: '2017-04-23', value: 81.89 },
	]);

	LightweightCharts.createSeriesMarkers(
		line,
		[
			{ time: '2017-04-10', position: 'inBar', color: 'orange', shape: 'circle' },
			{ time: '2017-04-16', position: 'inBar', color: 'orange', shape: 'circle' },
			{ time: '2017-04-17', position: 'inBar', color: 'orange', shape: 'circle' },
			{ time: '2017-04-18', position: 'inBar', color: 'orange', shape: 'circle' },
			{ time: '2017-04-24', position: 'inBar', color: 'orange', shape: 'circle' },
		]
	);

	chart.timeScale().fitContent();
}
