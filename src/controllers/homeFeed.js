function getHomeWithFeed(req, res) {
	// Get data from database
	// TODO: actually do that

	// temp dummy database data
	data = [{ title: "Test", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu nibh nulla. Nullam et pretium risus. Suspendisse id ultrices nisl, in imperdiet diam. Suspendisse eu nibh nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi ipsum orci, euismod vel auctor nec, imperdiet ut ante. Nullam vestibulum, orci et commodo euismod, tortor urna faucibus sapien, sit amet lobortis libero risus non urna. Cras sit amet pharetra nibh, blandit tincidunt odio. Cras cursus, lacus in rutrum venenatis, arcu diam laoreet lorem, at aliquam purus odio ut dui. In dapibus, est quis mattis ultrices, sapien dolor congue turpis, at commodo dui ex in risus. Vivamus pellentesque ipsum nulla, vel imperdiet nisi laoreet id. Maecenas blandit eu velit ac sodales. Curabitur nec odio velit. Cras auctor purus at mi condimentum cursus. Pellentesque quis ultricies ligula, in gravida nunc. ", link: "firstPost"}]
	data.push(data[0]);
	// add entry for each database entry, up to a max of 10
	output = { feed: []}
	for (const item of data) {
		console.log(item.title);
		outputItem = { title: item.title, content: item.content.slice(0, 300), link: item.link};
		output.feed.push(outputItem);
	}
	// render
	res.render('home.handlebars', output);
}

module.exports = { getHomeWithFeed };
