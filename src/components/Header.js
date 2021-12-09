import React from "react";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

const Header = () => {
    return (
        <header>
			<Link to={"/movie-list"}>
				<nav class="navbar navbar-dark bg-info">
					<div class="container bg-info">
						<span class="navbar-brand bg-info" href="#">
							<i className="bi bi-film bg-info"></i> React 
							<span className="bg-info"> Movies</span>
						</span>
						<div className="btn-group">
						<Link to={'/favorites'}>
							<button className="btn btn-light">Your Favorites</button>
						</Link>
							<ModalForm/>
							</div>
						
						
					</div>
					
				</nav>
			</Link>

        </header>
    );
};

export default Header;
