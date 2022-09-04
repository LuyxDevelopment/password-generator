function NotFound(): JSX.Element {
	return (<>
		<div id="content" className="h-screen w-screen grid items-center">
			<div>
				<h1 className="text-2xl md:text-4xl text-center mt-4">
					This page doesn't exist.
				</h1>
			</div>
		</div>
	</>);
}

export default NotFound;