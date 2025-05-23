function generateCandle(i, target) {
	const step = (i % 20) / 5000;
	const base = i / 5;
	target.open = base * (1 - step);
	target.high = base * (1 + 2 * step);
	target.low = base * (1 - 2 * step);
	target.close = base * (1 + step);
}

function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2000, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 10000; ++i) {
		const item = {
			time: time.getTime() / 1000,
		};
		time.setUTCDate(time.getUTCDate() + 1);

		generateCandle(i, item);
		res.push(item);
	}
	return res;
}

function runTestCase(container) {
	const chart = window.chart = LightweightCharts.createChart(container, { layout: { attributionLogo: false } });

	const mainSeries = chart.addSeries(LightweightCharts.CandlestickSeries);

	mainSeries.setData(generateData());

	chart.timeScale().setVisibleRange({
		from: (new Date(Date.UTC(2000, 0, 1, 0, 0, 0, 0))).getTime() / 1000,
		to: (new Date(Date.UTC(2019, 0, 2, 0, 0, 0, 0))).getTime() / 1000,
	});
}
