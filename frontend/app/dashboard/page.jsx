'use client'

export default function Dashboard() {
	return (
		<div className="container mt-5">
			<div className="d-flex justify-content-between align-items-center mb-4">
				<div>
					<h1 className="mb-2">Dashboard</h1>
					<p className="lead mb-0">Welcome to DigitalPro Dashboard</p>
				</div>
			</div>

			<div className="row">
				<div className="col-md-4 mb-4">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">📊 Analytics</h5>
							<p className="card-text">View your website analytics and performance metrics.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-4">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">🔧 Tools</h5>
							<p className="card-text">Access all SEO tools and marketing resources.</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 mb-4">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">📈 Reports</h5>
							<p className="card-text">Generate and download detailed reports.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
