// src/App.tsx
import "./App.css";

function App() {
	return (
		<div className="app">
			{/* Navigation */}
			<nav className="navbar">
				<div className="nav-container">
					<div className="logo-section">
						<img src="/ATB%20White.png" alt="About Time Brewing" className="logo-img" />
						<span className="logo-text">About Time Brewing</span>
					</div>
					<ul className="nav-links">
						<li><a href="#about">About</a></li>
						<li><a href="#beers">Our Beers</a></li>
					</ul>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="hero">
				<div className="hero-content">
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="about">
				<div className="container">
					<h2>About Our Brewery</h2>
					<p className="about-text">
						Welcome to About Time Brewing, where we combine traditional brewing techniques with innovative flavors. 
						Our passion for craft beer began in a small home brewery and has grown into a community of beer enthusiasts. 
						Every batch is carefully crafted to deliver exceptional taste and quality.
					</p>
				</div>
			</section>

			{/* Beers Section */}
			<section id="beers" className="beers">
				<div className="container">
					<h2>Our Beers</h2>
					<div className="beer-grid">
						<div className="beer-card">
							<h3>Chronos</h3>
							<p className="beer-type">West Coast IPA</p>
							<p className="beer-desc">Bold, hop-forward brew with a refreshing finish. Warrior, Citra and Simcoe hops with Pale Ale and Caramel malts flavor this beer. </p>
							<p className="abv">ABV: 8.2%</p>
						</div>
						<div className="beer-card">
							<h3>Night-Night</h3>
							<p className="beer-type">Chocolate Oatmeal Stout</p>
							<p className="beer-desc">ROates, Roasted Barley, Pale Ale and Pale Chocolate malts are combined with a little Kent Goldings and Cocoa Nibs balance out the hefty grain bill. This is a sweet and drinkable brew.</p>
							<p className="abv">ABV: 7.8%</p>
						</div>
						<div className="beer-card">
							<h3>Coffee Break</h3>
							<p className="beer-type">Black IPA</p>
							<p className="beer-desc">Dark and rich with a dry finish. Pale Chocolate with Pale Ale malts gives this creation a darker appearance and flavor. Warrior, Citra and Simcoe add a nice balance to this beer.  Served Nitro it takes on a Guinness flavor profile.</p>
							<p className="abv">ABV: 6.5%</p>
						</div>
						<div className="beer-card">
							<h3>Black Hole</h3>
							<p className="beer-type">Porter</p>
							<p className="beer-desc">Maris Otter, caramel, chocolate, Munich and patent malts sweeten this dark beauty. A hint of Fuggles and Citra hops add a citrus tang to the end.</p>
							<p className="abv">ABV: 5.5%</p>
						</div>
						<div className="beer-card">
							<h3>Sweet Dreams</h3>
							<p className="beer-type">Sugar Cane IPA</p>
							<p className="beer-desc">Bold, hop-forward brew with a refreshing finish. Warrior, Citra and Simcoe hops with Pale Ale and Caramel malts flavor this beer with raw sugar cane added to the last 15 minutes of the boil.</p>
							<p className="abv">ABV: 7.5%</p>
						</div>
						<div className="beer-card">
							<h3>Summer Solstice</h3>
							<p className="beer-type">Hefeweizen</p>
							<p className="beer-desc">Bohemian pilsner and German wheat are the base for this refreshing creation. There’s a little Citra hops for flavor in there too.</p>
							<p className="abv">ABV: 7.5%</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; 2025 About Time Brewing. All rights reserved. Cheers! 🍻</p>
			</footer>
		</div>
	);
}

export default App;
